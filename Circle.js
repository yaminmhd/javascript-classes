class Circle{
  constructor(radius){
    this.radius = radius;
  }

  area(){
    return parseFloat((Math.PI * this.radius**2).toFixed(1));
  }

  perimeter(){
    return parseFloat((2 * Math.PI * this.radius).toFixed(1));
  }

}


module.exports = Circle