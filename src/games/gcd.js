import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const getRound = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  playGame(description, getRound);
};
