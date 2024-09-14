import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getRound = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => {
  playGame(description, getRound);
};
