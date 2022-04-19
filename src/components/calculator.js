import React, { Component } from 'react';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="container">
          <div className="output">
            <h2 className="display">0</h2>
          </div>
          <div className="numbers">
            <button className="number" type="button">AC</button>
            <button className="number" type="button">+/-</button>
            <button className="number" type="button">%</button>
            <button className="operator" type="button">÷</button>

            <button className="number" type="button">7</button>
            <button className="number" type="button">8</button>
            <button className="number" type="button">9</button>
            <button className="operator" type="button">*</button>

            <button className="number" type="button">4</button>
            <button className="number" type="button">5</button>
            <button className="number" type="button">6</button>
            <button className="operator" type="button">-</button>

            <button className="number" type="button">1</button>
            <button className="number" type="button">2</button>
            <button className="number" type="button">3</button>
            <button className="operator" type="button">+</button>

          </div>
          <div className="numbers-last">
            <button className="number" type="button">0</button>
            <button className="number" type="button">.</button>
            <button className="operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
