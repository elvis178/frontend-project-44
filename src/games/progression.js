import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRound = () => {
  const start = Math.floor((Math.random() * 100) + 1);
  const step = Math.floor((Math.random() * 10) + 1);
  const length = Math.floor((Math.random() * 6) + 5);

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => {
  playGame(description, getRound);
};
