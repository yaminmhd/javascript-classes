class Rectangle{
  constructor(breadth,length){
    this.breadth = breadth;
    this.length = length;
  }
  area(){
    return this.breadth * this.length;
  }

  perimeter(){
    return ((2*this.length) +(2*this.breadth));
  }
}

module.exports = Rectangle