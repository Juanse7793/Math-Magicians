import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttons1 = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'];
  const buttons2 = ['0', '.', '='];

  const onClickEvent = (event) => {
    const { value } = event.target;
    const { total, next, operation } = calculate(state, value);
    setState({ total, next, operation });

    const output = document.querySelector('.display');
    if (next !== null) {
      output.innerHTML = next;
    } else if (total !== null) {
      output.innerHTML = total;
    } else {
      output.innerHTML = '';
    }
  };

  return (
    <div className="calculator">
      <div className="container">
        <div className="output">
          <h2 className="display">0</h2>
        </div>
        <div className="numbers">
          {buttons1.map((button) => {
            let boton;
            if (button.match(/^['÷', 'x', '-', '+', '\-']$/)) {
              boton = (<button key={button} className="operator" value={button} type="button" onClick={onClickEvent}>{button}</button>);
            } else {
              boton = (<button key={button} className="number" value={button} type="button" onClick={onClickEvent}>{button}</button>);
            }
            return boton;
          })}
        </div>
        <div className="numbers-last">
          {buttons2.map((button) => {
            let boton;
            if (button.match(/^['=']$/)) {
              boton = (<button key={button} className="operator" value={button} type="button" onClick={onClickEvent}>{button}</button>);
            } else {
              boton = (<button key={button} className="number" value={button} type="button" onClick={onClickEvent}>{button}</button>);
            }
            return boton;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
