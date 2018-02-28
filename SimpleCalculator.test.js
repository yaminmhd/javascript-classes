var Calculator = require('./SimpleCalculator');
var calculator = new Calculator(5);
var calculatorChain = new Calculator();


it('should add 5 to value to equal 20', () => {
  calculator.add(15);
  console.log(`Expected value: 20, Returned value: ${calculator.value}`);
});

it('should subtract 8 from value to equal 12', () => {
  calculator.subtract(8);
  console.log(`Expected value: 12, Retured value: ${calculator.value}`);
});

it('should multiply 3 to value to equal 36', () => {
  calculator.multiply(3);
  console.log(`Expected value: 36, Retured value: ${calculator.value}`);
});

it('should divide 12 from value to equal 3', () => {
  calculator.divide(12);
  console.log(`Expected value: 3, Retured value: ${calculator.value}`);
});

it('should have a default value of 0 if no arguments are provided in constructor', () => {
  console.log(`Expected value: 0, Returned value: ${calculatorChain.value}`)
});

it('should add 5, multiply 7, subtract 14, divide 3 to equal 7 ', () => {
  calculatorChain.add(5).multiply(7).subtract(14).divide(3);
  console.log(`Expected value: 7, Returned value: ${calculatorChain.value}`)
});

