import playGame from '../index.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRound = () => {
  const num1 = Math.floor((Math.random() * 100) + 1);
  const num2 = Math.floor((Math.random() * 100) + 1);
  const operator = operators[Math.floor(Math.random() * operators.length)];

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
