import renderer from 'react-test-renderer';
import Quotes from './quotes';
import Home from './home';
import Calculator from './CalculatorP';
import Navbar from './Navbar';

describe('Pages renders correctly', () => {
  it('Quotes page renders correctly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calculator page renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home page renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Navbar renders correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
