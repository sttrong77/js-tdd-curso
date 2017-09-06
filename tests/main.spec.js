import { expect } from 'chai';
import FizzBuss from '../src/main';

describe('FizzBuss', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuss(9)).to.be.equal('Fizz');
    expect(FizzBuss(6)).to.be.equal('Fizz');
  });
  it('should return `Buss` when multiple of 5', () => {
    expect(FizzBuss(10)).to.be.equal('Buss');
    expect(FizzBuss(5)).to.be.equal('Buss');
  });
  it('should return `FizzBuss` when multiple 3 and 5', () => {
    expect(FizzBuss(15)).to.be.equal('FizzBuss');
  });
  it('should return `the number` when non-multiple', () => {
    expect(FizzBuss(7)).to.be.equal(7);
  });
});
