import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  let question;
  let correctAnswer;

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = String(num1 * num2);
      break;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }
  return [question, correctAnswer];
};

export default () => {
  playGame(description, getRound);
};
