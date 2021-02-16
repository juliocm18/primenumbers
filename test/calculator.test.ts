import calculator from '../src/context/shared/utils/calculator'
import chai from 'chai';
import assertArrays from 'chai-arrays';
chai.use(assertArrays);

it('get prime numbers correctly for 7', () => {
    chai.expect(calculator.getPrimeNumbersUntil(7)).to.be.equalTo([7, 5, 3, 2, 1]);

})

it('get prime numbers correctly for 15', () => {
    chai.expect(calculator.getPrimeNumbersUntil(15)).to.be.equalTo([13, 11, 7, 5, 3, 2, 1]);

})