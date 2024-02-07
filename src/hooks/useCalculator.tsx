import {useState, useRef} from 'react';

enum Operators {
  sum,
  subtract,
  multiply,
  divide,
}
export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [previousResult, setPreviousResult] = useState('0');

  const lastOperator = useRef<Operators>();

  const clear = () => {
    setResult('0');
    setPreviousResult('0');
  };

  const buildNumber = (textNumber: string) => {
    if (result.includes('.') && textNumber === '.') {
      return;
    }
    if (result.startsWith('0') || result.startsWith('-0')) {
      if (textNumber === '.') {
        setResult(result + textNumber);
      } else if (textNumber === '0' && result.includes('.')) {
        setResult(result + textNumber);
      } else if (textNumber !== '0' && !result.includes('.')) {
        setResult(textNumber);
      } else if (textNumber === '0' && !result.includes('.')) {
        setResult(result);
      } else {
        setResult(result + textNumber);
      }
    } else {
      setResult(result + textNumber);
    }
  };

  const deleteLastCharacter = () => {
    if (result.length === 1 || (result.length === 2 && result.includes('-'))) {
      setResult('0');
    } else {
      setResult(result.slice(0, -1));
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const changeNumberToPreviousResult = () => {
    if (result.endsWith('.')) {
      setPreviousResult(result.slice(0, -1));
    } else {
      setPreviousResult(result);
    }
    setResult('0');
  };

  const divide = () => {
    lastOperator.current = Operators.divide;
    changeNumberToPreviousResult();
  };

  const multiply = () => {
    lastOperator.current = Operators.multiply;
    changeNumberToPreviousResult();
  };

  const subtract = () => {
    lastOperator.current = Operators.subtract;
    changeNumberToPreviousResult();
  };

  const sum = () => {
    lastOperator.current = Operators.sum;
    changeNumberToPreviousResult();
  };

  const calculate = () => {
    const num1 = Number(result);
    const num2 = Number(previousResult);

    switch (lastOperator.current) {
      case Operators.sum:
        setResult(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setResult(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setResult(`${num1 * num2}`);
        break;
      case Operators.divide:
        setResult(`${num2 / num1}`);
        break;
    }
  };

  return {
    result,
    previousResult,
    clear,
    buildNumber,
    deleteLastCharacter,
    positiveNegative,
    divide,
    multiply,
    subtract,
    sum,
    calculate,
  };
};
