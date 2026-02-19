import { test } from 'node:test';
import assert from 'node:assert';
import { generateProblem } from './questionGenerator.js';

test('questionGenerator', async (t) => {
  await t.test('should generate approximating-areas problem', () => {
    const problem = generateProblem('approximating-areas');
    assert.strictEqual(problem.type, 'number');
    assert.ok(
      problem.question.includes('Estimate the area') ||
      problem.question.includes('Given the interval') ||
      problem.question.includes('For the interval') ||
      problem.question.includes('Evaluate the sum') ||
      problem.question.includes('Given that $\\sum') ||
      problem.question.includes('Using the definition of area') ||
      problem.question.includes('Evaluate the limit'),
      'Question should start with one of the expected phrases'
    );
  });

  await t.test('should generate substitution integral problem', () => {
    const problem = generateProblem('substitution-integral');
    assert.strictEqual(problem.type, 'text');
    assert.ok(problem.question.includes('Evaluate'));
  });

  await t.test('should generate definite integral problem', () => {
    const problem = generateProblem('definite-integral-properties');
    assert.strictEqual(problem.type, 'number');
    assert.ok(
      problem.question.includes('Evaluate') ||
      problem.question.includes('evaluate') ||
      problem.question.includes('Find') ||
      problem.question.includes('Given'),
      'Question should start with one of the expected phrases'
    );
  });

  await t.test('should generate fallback for unknown type', () => {
    const problem = generateProblem('unknown-type');
    assert.strictEqual(problem.type, 'text');
    assert.ok(problem.question.includes('Practice problem for unknown-type'));
  });

  await t.test('should generate inverse trig integral problem', () => {
    const problem = generateProblem('inverse-trig-integrals');
    assert.strictEqual(problem.type, 'text');
    assert.ok(problem.question.includes('Evaluate'));
  });
});
