#!/usr/bin/env -S node --no-warnings --import dotenv/config --loader ts-node/esm

import isAnimal from './module/search.mjs';

console.log('animal: ', isAnimal('bird'));
