#!/usr/bin/env node
import { Welcome, Loop, Random } from '../../src/index.js';

const BrainProgression = () => {
  console.log(`${Welcome()}\nWhat number is missing in the progression?`);
  for (let i = 0, str = ''; ; i += 1, str = '') {
    const length = Random(5, 11);
    let j = Random(0, 11);
    const h = Random(2, 8);
    let num;
    for (let k = 0, missing = Random(k, length); k < length; k += 1, j += h) {
      if (k === missing) {
        str += '.. ';
        num = j;
      } else str += `${j} `;
    }
    if (!Loop(str, String(num), i)) break;
  }
};

BrainProgression();
