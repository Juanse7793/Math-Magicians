import { Component } from 'react';
import Calculator from './components/calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="home">
          <h1>Math Magicians</h1>
        </div>
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    );
  }
}
