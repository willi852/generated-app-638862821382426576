import React, { useState } from 'react';
import axios from 'axios';
import Calculator from './components/Calculator';
import './styles/App.css';

function App() {
  const [result, setResult] = useState('0');
  const [error, setError] = useState('');

  const handleCalculation = async (expression) => {
    try {
      setError('');
      const response = await axios.post('http://localhost:5000/api/calculate', { expression });
      setResult(response.data.result.toString());
    } catch (err) {
      setError('Invalid expression. Please try again.');
      console.error('Calculation error:', err);
    }
  };

  return (
    <div className="app">
      <h1>Scientific Calculator</h1>
      {error && <div className="error-message">{error}</div>}
      <Calculator onCalculate={handleCalculation} result={result} />
    </div>
  );
}

export default App;