import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Calculator = ({ onCalculate, result }) => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    onCalculate(input);
  };

  const scientificButtons = [
    'sin', 'cos', 'tan', 'log',
    'sqrt', '^', '(', ')',
    'π', 'e', '!'
  ];

  const basicButtons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="keypad">
        <div className="scientific-buttons">
          {scientificButtons.map((btn) => (
            <button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
        <div className="basic-buttons">
          {basicButtons.map((btn) => (
            <button
              key={btn}
              onClick={btn === '=' ? handleCalculate : () => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  onCalculate: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
};

export default Calculator;