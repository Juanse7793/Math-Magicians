import operate from './operate';

describe('operate', () => {
  it('should return the correct result for the input 1 + 1', () => {
    const result = operate('1', '1', '+');
    expect(result).toEqual('2');
  });
  it('should return the correct result for the input 1 - 1', () => {
    const result = operate('1', '1', '-');
    expect(result).toEqual('0');
  });
  it('should return the correct result for the input 2 x 3', () => {
    const result = operate('2', '3', 'x');
    expect(result).toEqual('6');
  });
  it('should return the correct result for the input 2 ÷ 3', () => {
    const result = Number(operate('2', '3', '÷'));
    expect(result).toBeCloseTo(0.66666);
  });
  it('should return the correct result for the input 2 ÷ 0', () => {
    const result = operate('2', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });
  it('should return the correct result for the input 2 % 3', () => {
    const result = operate('2', '3', '%');
    expect(result).toEqual('2');
  });
  it('should return the correct result for the input 2 + a', () => {
    expect(() => {
      operate('2', 'a', '+');
    }).toThrow(Error);
  });
});
