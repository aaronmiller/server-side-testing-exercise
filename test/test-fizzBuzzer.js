const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
  it('should be a valid number.', () => {
    const badInputs = [true, false, '1', 'zero', function() {}, [[[[1, 2, 3]]]]];
    badInputs.forEach(input => {
      (function() {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
  });

  it('should return "fizz" for multiples of 3.', () => {
    [3, 6, 9, 12].forEach(input => {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return "buzz" for multiples of 5.', () => {
    [5, 10, 20, 25].forEach(input => {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should return "fizz-buzz" for multiples of 15.', () => {
    [15, 30, 45, 60].forEach(input => {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return a number if input is not multiple of 3 or 5.', () => {
    [1, 2, 4, 7].forEach(input => {
      fizzBuzzer(input).should.equal(input);
    });
  });
});
