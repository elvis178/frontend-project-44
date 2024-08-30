import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};

export default () => {
  playGame(description, getRound);
};
