import calculatorRegex from '@utils/calculateRegex';
import isNumber from '@utils/isNumber';
import { useState } from 'react';

const numberPattern = /[.\d]/;
const firstInputPattern = /[1-9]/;
const operandInputPattern = /[-+÷x]/;

const useCalculator = () => {
  const [result, setResult] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const latestInput = input.substring(input.length - 1);
  const latestCurrentNumber = currentNumber.substring(currentNumber.length - 1);

  const handleInput = (key: string) => {
    key = key.replace(/,/g, '.'); // Mengganti ÷ dengan /
    key = key.replace(/\//g, '÷'); // Mengganti ÷ dengan /
    key = key.replace(/\*/g, 'x'); // Mengganti x dengan *

    // validate number input
    if (key === 'Backspace') {
      if (currentNumber.length === 0) setInput(input.slice(0, -1));
      else setCurrentNumber(currentNumber.slice(0, -1));
    }
    if (key === 'Enter' && input + currentNumber !== '') {
      setResult((oldResult) => [...oldResult, input + currentNumber]);
      setInput('');
      setCurrentNumber('');
    }
    if (currentNumber.length === 0) {
      if (latestInput !== '-' && key === '-') {
        setCurrentNumber('-');
      } else if (key === '.') {
        setCurrentNumber('0.');
      } else if (isNumber(key)) {
        setCurrentNumber(key);
      }
    } else if (currentNumber === '0' && key === '-') {
      setCurrentNumber('-0');
    } else if (
      operandInputPattern.test(key) &&
      latestCurrentNumber !== '.' &&
      latestCurrentNumber !== '-'
    ) {
      setInput(input + currentNumber + key);
      setCurrentNumber('');
    } else {
      if (currentNumber === '0' && firstInputPattern.test(key)) {
        setCurrentNumber(key);
      } else if (currentNumber === '-0' && firstInputPattern.test(key)) {
        setCurrentNumber(`-${key}`);
      } else if (
        numberPattern.test(key) &&
        !Number.isNaN(Number(currentNumber + key)) &&
        Number(currentNumber) + Number(key) !== 0
      ) {
        setCurrentNumber(currentNumber + key);
      }
    }
  };
  return {
    currentText: input + currentNumber,
    latestResult: result.length !== 0 && calculatorRegex(result[result.length - 1]),
    resultHistory: result,
    handleInput,
  };
};

export default useCalculator;
