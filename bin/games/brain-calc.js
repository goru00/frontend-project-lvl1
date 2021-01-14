#!/usr/bin/env node
import { Welcome, Loop, Random } from '../../src/index.js';

const BrainCalc = () => {
  console.log(`${Welcome()}\nWhat is the result of the expression?`);
  for (let i = 0, str = '', num1, num2, num; ; i += 1, str = '') {
    num1 = Random(1, 10);
    num2 = Random(1, 10);
    switch (Random(1, 4)) {
      case 1:
        str += `${num1} + ${num2}`;
        num = num1 + num2;
        break;
      case 2:
        str += `${num1} - ${num2}`;
        num = num1 - num2;
        break;
      case 3:
        str += `${num1} * ${num2}`;
        num = num1 * num2;
        break;
      default:
        break;
    }
    if (!Loop(str, String(num), i)) break;
  }
};

BrainCalc();
