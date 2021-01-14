import readlineSync from 'readline-sync';

const Input = (question) => {
  const arg = readlineSync.question(`${question}`);
  return arg;
};

export default Input;
