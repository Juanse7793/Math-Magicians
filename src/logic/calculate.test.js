import calculate from './calculate';

describe('calculate', () => {
  it('should return the correct result for the AC input', () => {
    const result = calculate(
      {
        total: null,
        next: null,
        operation: null,
      },
      'AC',
    );
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should return the correct result for the input 0', () => {
    const result = calculate(
      {
        total: null,
        next: null,
        operation: null,
      },
      '0',
    );
    expect(result).toEqual({
      next: '0',
      total: null,
    });
  });

  it('should return the correct result for the input +/-', () => {
    const result = calculate(
      {
        total: null,
        next: '2',
        operation: null,
      },
      '+/-',
    );
    expect(result).toEqual({
      next: '-2',
      total: null,
      operation: null,
    });
  });
  it('should return the correct result for the input 1', () => {
    const result = calculate(
      {
        total: null,
        next: null,
        operation: null,
      },
      '1',
    );
    expect(result).toEqual({
      next: '1',
      total: null,
    });
  });
});
