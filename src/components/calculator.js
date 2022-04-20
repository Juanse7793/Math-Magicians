import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  onClickEvent = (event) => {
    const { value } = event.target;
    const { total, next, operation } = calculate(this.state, value);
    this.setState({ total, next, operation });
    const output = document.querySelector('.display');
    if (next !== null) {
      output.innerHTML = next;
    } else if (total !== null) {
      output.innerHTML = total;
    } else {
      output.innerHTML = '';
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="container">
          <div className="output">
            <h2 className="display">0</h2>
          </div>
          <div className="numbers">
            <button onClick={this.onClickEvent} value="AC" className="number" type="button">AC</button>
            <button onClick={this.onClickEvent} value="+/-" className="number" type="button">+/-</button>
            <button onClick={this.onClickEvent} value="%" className="number" type="button">%</button>
            <button onClick={this.onClickEvent} value="÷" className="operator" type="button">÷</button>

            <button onClick={this.onClickEvent} value="7" className="number" type="button">7</button>
            <button onClick={this.onClickEvent} value="8" className="number" type="button">8</button>
            <button onClick={this.onClickEvent} value="9" className="number" type="button">9</button>
            <button onClick={this.onClickEvent} value="x" className="operator" type="button">x</button>

            <button onClick={this.onClickEvent} value="4" className="number" type="button">4</button>
            <button onClick={this.onClickEvent} value="5" className="number" type="button">5</button>
            <button onClick={this.onClickEvent} value="6" className="number" type="button">6</button>
            <button onClick={this.onClickEvent} value="-" className="operator" type="button">-</button>

            <button onClick={this.onClickEvent} value="1" className="number" type="button">1</button>
            <button onClick={this.onClickEvent} value="2" className="number" type="button">2</button>
            <button onClick={this.onClickEvent} value="3" className="number" type="button">3</button>
            <button onClick={this.onClickEvent} value="+" className="operator" type="button">+</button>

          </div>
          <div className="numbers-last">
            <button onClick={this.onClickEvent} value="0" className="number" type="button">0</button>
            <button onClick={this.onClickEvent} value="." className="number" type="button">.</button>
            <button onClick={this.onClickEvent} value="=" className="operator" type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}
