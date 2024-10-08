import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => {
  playGame(description, getRound);
};
