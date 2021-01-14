import Input from './cli.js';

let name;
export const Welcome = () => {
  console.log('Welcome to the Brain Games!');
  name = Input('May I have your name? ');
  return `Hello, ${name}`;
};

export const Random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const Loop = (num, str, count) => {
  console.log(`Question: ${num}`);
  const meanswer = Input('Your answer: ');
  if (str !== meanswer) {
    console.log(`'${meanswer}' is wrong answer ;(. Correct answer was '${str}'\nLet's try again, ${name}`);
    return false;
  }
  console.log('Correct!');
  if (count === 2) {
    console.log(`Congratulations, ${name}`);
    return false;
  }
  return true;
};
