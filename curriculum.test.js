import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { curriculum } from './curriculum.js';

describe('Curriculum Data Integrity', () => {
  test('curriculum should be an array', () => {
    assert.ok(Array.isArray(curriculum), 'Curriculum should be an array');
  });

  test('each module should have required fields and unique ids', () => {
    const moduleIds = new Set();
    curriculum.forEach((module, index) => {
      assert.ok(module.id, `Module at index ${index} is missing an id`);
      assert.ok(module.title, `Module ${module.id} is missing a title`);
      assert.ok(Array.isArray(module.topics), `Module ${module.id} should have a topics array`);

      assert.ok(!moduleIds.has(module.id), `Duplicate module id found: ${module.id}`);
      moduleIds.add(module.id);

      // URL-friendly ID check (slug)
      assert.match(module.id, /^[a-z0-9-]+$/, `Module id ${module.id} should be URL-friendly (lowercase, numbers, and hyphens only)`);
    });
  });

  test('each topic should have required fields and unique ids', () => {
    const topicIds = new Set();
    curriculum.forEach((module) => {
      module.topics.forEach((topic, index) => {
        assert.ok(topic.id, `Topic at index ${index} in module ${module.id} is missing an id`);
        assert.ok(topic.title, `Topic ${topic.id} in module ${module.id} is missing a title`);
        assert.ok(topic.content, `Topic ${topic.id} in module ${module.id} is missing content`);

        assert.ok(!topicIds.has(topic.id), `Duplicate topic id found: ${topic.id}`);
        topicIds.add(topic.id);

        // URL-friendly ID check (slug)
        assert.match(topic.id, /^[a-z0-9-]+$/, `Topic id ${topic.id} should be URL-friendly (lowercase, numbers, and hyphens only)`);

        // Content should not be empty
        assert.ok(topic.content.trim().length > 0, `Topic ${topic.id} has empty content`);
      });
    });
  });

  test('there should be no overlap between module ids and topic ids', () => {
    const moduleIds = new Set(curriculum.map(m => m.id));
    curriculum.forEach(module => {
      module.topics.forEach(topic => {
        assert.ok(!moduleIds.has(topic.id), `Topic id ${topic.id} overlaps with a module id`);
      });
    });
  });
});
