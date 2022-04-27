import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quotes from './quotes';
import CalculatorP from './calculatorP';
import Home from './home';
import Navbar from './Navbar';

describe('Pages renders correctly', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<CalculatorP />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
