#!/usr/bin/env -S node --no-warnings --import dotenv/config --loader ts-node/esm

import test from 'node:test';
import assert from 'node:assert';

import isAnimal from './module/search.mts';

test('do i own a animal?', () => {
  console.log(isAnimal);
  assert.ok(isAnimal('bird'), 'i own a bird');
});

test('is a head attached to my body?', () => {
  const bodyparts = ['torso', 'arms', 'legs', 'head', 'feet'];

  assert.ok(bodyparts.includes('head'), 'head is attached to body');
});
