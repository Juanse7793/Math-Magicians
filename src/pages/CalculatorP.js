import React from 'react';
import Calculator from '../components/calculator';
import './Style.css';

const CalculatorPage = () => (
  <div className="CalculatorPage">
    <div className="CalculatorPage-title">
      <h2>Let`s Do Math</h2>
    </div>
    <div className="CalculatorPage-calculator">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
