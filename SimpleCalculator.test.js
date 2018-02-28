var Calculator = require('./SimpleCalculator');
var calculator = new Calculator(5);
var calculatorChain = new Calculator();


it('should add 5 to value to equal 20', () => {
  calculator.add(15);
  console.log(`Expected value: 20, Returned value: ${calculator.value}`);
});



