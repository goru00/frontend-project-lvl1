#!/usr/bin/env node
import { Welcome, Random, Loop } from '../../src/index.js';

const BrainPrime = () => {
  console.log(`${Welcome()}\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
  for (let i = 0, str, num, count = 0; ; i += 1, count = 0) {
    num = Random(1, 41);
    for (let j = 1; j <= num; j += 1) {
      if (num % j === 0) count += 1;
    }
    str = (count === 2) ? 'yes' : 'no';
    if (!Loop(num, str, i)) break;
  }
};

BrainPrime();
