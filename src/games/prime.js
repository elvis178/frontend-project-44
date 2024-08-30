import playGame from '../index.js';

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
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};

export default () => {
  playGame(description, getRound);
};
