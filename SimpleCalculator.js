class SimpleCalculator{
  constructor(value = 0){
    this.value = value;
  }

  add(n){
    this.value += n;
    return this
  }

  subtract(n){
    this.value -= n;
    return this
  }

  multiply(n){
    this.value *= n;
    return this
  }

  divide(n){
    this.value /= n;
    return this
  }


}


module.exports = SimpleCalculator;