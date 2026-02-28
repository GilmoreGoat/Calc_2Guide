import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { validateMath } from './mathValidator.js';

describe('Math Validator', () => {
  test('Basic Arithmetic', () => {
    assert.ok(validateMath('2+2', '4', 'text').isCorrect);
    assert.ok(validateMath('x+x', '2x', 'text').isCorrect);
    assert.ok(validateMath('2*x', '2x', 'text').isCorrect);
    assert.ok(validateMath('x^2', 'x*x', 'text').isCorrect);
  });

  test('Implicit Multiplication', () => {
    assert.ok(validateMath('2x', '2*x', 'text').isCorrect);
    assert.ok(validateMath('x(x+1)', 'x^2+x', 'text').isCorrect);
    assert.ok(validateMath('2sin(x)', '2*sin(x)', 'text').isCorrect);
    assert.ok(validateMath('xsin(x)', 'x*sin(x)', 'text').isCorrect);
    assert.ok(validateMath('xarcsin(x)', 'x*asin(x)', 'text').isCorrect);
  });

  test('Inverse Trigonometric Functions', () => {
    assert.ok(validateMath('arcsin(x)', 'asin(x)', 'text').isCorrect);
    assert.ok(validateMath('arccos(x)', 'acos(x)', 'text').isCorrect);
    assert.ok(validateMath('arctan(x)', 'atan(x)', 'text').isCorrect);

    // Check aliases
    assert.ok(validateMath('asin(x)', 'arcsin(x)', 'text').isCorrect);
    assert.ok(validateMath('acos(x)', 'arccos(x)', 'text').isCorrect);
    assert.ok(validateMath('atan(x)', 'arctan(x)', 'text').isCorrect);
  });

  test('Reciprocal Inverse Trig Functions', () => {
    // arcsec(x) = arccos(1/x)
    // Domain of arcsec is |x| >= 1.
    // Our validator checks random points, including 3, 10, -5, which are in domain.
    assert.ok(validateMath('arcsec(x)', 'arccos(1/x)', 'text').isCorrect);

    // Verify differentiation result for arcsec: 1/(x*sqrt(x^2-1))
    // We can't check symbolic diff, but we can check if 1/x*sqrt(x^2-1) matches arcsec'(x) if we had derivative checking.
    // Instead, let's just check function equivalence.
  });

  test('Other Functions', () => {
    assert.ok(validateMath('ln(x)', 'log(x)', 'text').isCorrect);
    assert.ok(validateMath('exp(x)', 'e^x', 'text').isCorrect);
    assert.ok(validateMath('sqrt(x)', 'x^(0.5)', 'text').isCorrect);
    assert.ok(validateMath('abs(x)', 'sqrt(x^2)', 'text').isCorrect);
  });

  test('Incorrect Answers', () => {
    assert.ok(!validateMath('x+1', 'x+2', 'text').isCorrect);
    assert.ok(!validateMath('sin(x)', 'cos(x)', 'text').isCorrect);
    assert.ok(!validateMath('arcsin(x)', 'arctan(x)', 'text').isCorrect);
  });

  test('Invalid Syntax', () => {
    // Missing parenthesis
    const result = validateMath('sin(x', 'sin(x)', 'text');
    assert.ok(!result.isCorrect);
    assert.match(result.message, /syntax/i);
  });

  test('+C Requirement', () => {
    assert.ok(validateMath('x^2 + C', 'x^2 + C', 'text').isCorrect);
    const noC = validateMath('x^2', 'x^2 + C', 'text');
    assert.ok(!noC.isCorrect);
    assert.match(noC.message, /constant of integration/i);
  });

  test('Security: Unauthorized function calls', () => {
    const payloads = [
      'alert(1)',
      'console.log(1)',
      'eval(x)',
      'atob(x)',
      'fetch(x)',
      'setTimeout(x, 1)',
      'require(x)'
    ];

    for (const payload of payloads) {
      const result = validateMath(payload, 'x');
      assert.ok(!result.isCorrect, `Payload should be blocked: ${payload}`);
      // Payload should be blocked either by word allowlist or dot operator restriction
      assert.ok(
        /Invalid function or variable/i.test(result.message) ||
        /Invalid use of decimal point/i.test(result.message) ||
        /Invalid characters/i.test(result.message),
        `Unexpected error message for ${payload}: ${result.message}`
      );
    }
  });

  test('Security: Property access', () => {
    const payloads = [
      'x.constructor',
      'sin.constructor',
      '(1).toString()',
      'pi.__proto__',
      'e["constructor"]' // [ ] blocked by allowedChars
    ];

    for (const payload of payloads) {
      const result = validateMath(payload, 'x');
      assert.ok(!result.isCorrect, `Property access should be blocked: ${payload}`);
      // Some might be blocked by characters, some by words, some by dots
    }
  });

  test('Security: Dot operator restriction', () => {
    assert.ok(validateMath('3.14', '3.14', 'text').isCorrect);
    assert.ok(validateMath('.5', '0.5', 'text').isCorrect);
    assert.ok(validateMath('5.', '5', 'text').isCorrect);

    const badDots = [
      '3.1.4',
      'x.sin(x)',
      '..',
      ' . ',
      '1. e'
    ];

    for (const dot of badDots) {
      const result = validateMath(dot, 'x');
      assert.ok(!result.isCorrect, `Bad dot should be blocked: ${dot}`);
    }
  });
});
