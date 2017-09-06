// import { expect } from 'chai';

var expect = require('chai').expect;

var calc = require('../src/main.js');

describe('Calc', () => {

  //smoke tests
  // Verifica se existe calc, e se dentro de
  //calc, existe as operações.
  describe('Smoke tests', function(){
    it('should exist the calc lib', function(){
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function(){
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a.function;
    });

    it('should exist the method `sub`', function(){
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a.function;
    });

    it('should exist the method `mult`', function(){
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a.function;
    });

    it('should exist the method `div`', function(){
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a.function;
    });
  });

  describe('Sum',function(){
    it('should return 4 when `sum(2,2)`', function(){
      expect(calc.sum(2,2)).to.be.equal(4);
    });

    it('should return -4 when `sub(6,10)`', function(){
      expect(calc.sub(6,10)).to.be.equal(-4);
    });

    it('should return 4 when `mult(2,2)`', function(){
      expect(calc.mult(2,2)).to.be.equal(4);
    });

    it('should return 4 when `div(8,4)`', function(){
      expect(calc.div(8,2)).to.be.equal(4);
    });

     it('should return `não é possível divisao por 0!` when division by 0', function(){
      expect(calc.div(4,0)).to.be.equal('Não é possível divisao por 0!');
    });

  });

});
