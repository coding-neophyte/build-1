const pow = require('./pow.js');

describe('pow', () => {
  it('should return the exponent of two numbers', () => {
    const baseNumber = 5;
    const exponentNumber = 5;

    expect(pow(baseNumber, exponentNumber)).toEqual(3125);
  });
});
