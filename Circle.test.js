var Circle = require('./Circle');
var circle1 = new Circle(1);
var circle2 = new Circle(2);
var circle3 = new Circle(3);


describe('Circle 1',function(){
  it('First circle object should return an area of 3.1', () => {
    expect(circle1.area()).toEqual(3.1);
  });

  it('First circle object should return a perimeter of 6.3', () => {
    expect(circle1.perimeter()).toEqual(6.3);
  });
})

describe('Circle 2', function(){
  it('Second circle object should return an area of 3.14', () => {
    expect(circle2.area()).toEqual(12.6);
  });

  it('Second circle object should return a perimeter of 12.6', () => {
    expect(circle2.perimeter()).toEqual(12.6);
  });
})

describe('Circle 3', function(){
  it('Third circle object should return an area of 3.14', () => {
    expect(circle3.area()).toEqual(28.3);
  });

  it('Third circle object should return a perimeter of 18.9', () => {
    expect(circle3.perimeter()).toEqual(18.8);
  });
})