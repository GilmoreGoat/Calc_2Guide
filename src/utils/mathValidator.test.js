import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validateMath } from './mathValidator.js';

describe('mathValidator', () => {
  describe('Numerical Answers', () => {
    it('should accept correct numerical answers', () => {
      const result = validateMath('10.5', '10.5', 'number');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should accept numerical answers within tolerance', () => {
      const result = validateMath('10.50001', '10.5', 'number');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should reject incorrect numerical answers', () => {
      const result = validateMath('10', '10.5', 'number');
      assert.strictEqual(result.isCorrect, false);
    });

    it('should handle non-numeric input for number type', () => {
      const result = validateMath('abc', '10.5', 'number');
      assert.strictEqual(result.isCorrect, false);
      assert.match(result.message, /valid number/);
    });
  });

  describe('Algebraic Answers', () => {
    it('should accept exact matches', () => {
      const result = validateMath('x^2+C', 'x^2+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should accept implicit multiplication', () => {
      // 5x vs 5*x
      const result = validateMath('5x+C', '5*x+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should accept explicit multiplication when implicit is expected', () => {
      // 5*x vs 5x
      const result = validateMath('5*x+C', '5x+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should ignore whitespace', () => {
      const result = validateMath('5 * x^2 + C', '5x^2+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should require +C if expected', () => {
      const result = validateMath('x^2', 'x^2+C');
      assert.strictEqual(result.isCorrect, false);
      assert.match(result.message, /\+C/);
    });

    it('should handle different variable spacing', () => {
      const result = validateMath('x + x^2 + C', 'x^2+x+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should handle equivalent expressions', () => {
      // (x+1)^2 = x^2+2x+1
      const result = validateMath('(x+1)^2+C', 'x^2+2x+1+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should handle fractional coefficients', () => {
      // 0.5x^2 = 1/2x^2
      // Note: 1/2x^2 in JS is (1/2)*x^2 = 0.5x^2
      const result = validateMath('1/2x^2+C', '0.5x^2+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should reject incorrect expressions', () => {
      const result = validateMath('x^3+C', 'x^2+C');
      assert.strictEqual(result.isCorrect, false);
    });

    it('should handle case insensitivity', () => {
      const result = validateMath('X^2+c', 'x^2+C');
      assert.strictEqual(result.isCorrect, true);
    });

    it('should handle syntax errors gracefully', () => {
      const result = validateMath('x^+C', 'x^2+C');
      assert.strictEqual(result.isCorrect, false);
    });

    it('should reject malicious input (security)', () => {
      // Trying to execute arbitrary code
      const maliciousInput = 'alert(1) + C';
      const result = validateMath(maliciousInput, 'x^2+C');
      assert.strictEqual(result.isCorrect, false);
      assert.match(result.message, /Invalid characters/);
    });
  });
});
