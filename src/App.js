import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import CalculatorPage from './pages/CalculatorP';
import Home from './pages/home';
import Quotes from './pages/quotes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Router>
      </>
    );
  }
}
