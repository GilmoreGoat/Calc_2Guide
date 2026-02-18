import { test } from 'node:test';
import assert from 'node:assert';
import { generateProblem } from './questionGenerator.js';

test('questionGenerator', async (t) => {
  await t.test('should generate indefinite integral problem', () => {
    const problem = generateProblem('indefinite-integral');
    assert.strictEqual(problem.type, 'text');
    assert.ok(problem.question.includes('Evaluate'));
    assert.ok(problem.answer.includes('+C'));
  });

  await t.test('should generate definite integral problem', () => {
    const problem = generateProblem('definite-integral');
    assert.strictEqual(problem.type, 'number');
    assert.ok(problem.question.includes('Evaluate'));
    assert.ok(!isNaN(parseFloat(problem.answer)));
  });

  await t.test('should return null for unknown type', () => {
    const problem = generateProblem('unknown-type');
    assert.strictEqual(problem, null);
  });
});
