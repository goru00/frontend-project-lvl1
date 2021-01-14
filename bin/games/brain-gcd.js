#!/usr/bin/env node
import { Welcome, Random, Loop } from '../../src/index.js';

const BrainGcd = () => {
  console.log(`${Welcome()}\nFind the greatest common divisor of given numbers.`);
  for (let i = 0, str = '', num; ; i += 1, str = '') {
    const num1 = Random(1, 101);
    const num2 = Random(1, 101);
    str += `${num1} ${num2}`;
    const length = (num1 < num2) ? num1 : num2;
    for (let j = 0; j < length; j += 1) {
      if (num1 % j === 0 && num2 % j === 0) {
        num = j;
      }
    }
    if (!Loop(str, String(num), i)) break;
  }
};

BrainGcd();
