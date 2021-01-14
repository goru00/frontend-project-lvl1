#!/usr/bin/env node
import {
  Welcome, Loop, Random,
} from '../../src/index.js';

const BrainEven = () => {
  console.log(`${Welcome()}\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let num;
  let str;
  for (let count = 0; ; count += 1) {
    num = Random(1, 11);
    str = (num % 2 === 0) ? 'yes' : 'no';
    if (!Loop(num, str, count)) break;
  }
};

BrainEven();
