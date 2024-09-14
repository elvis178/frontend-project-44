import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => {
  playGame(description, getRound);
};
