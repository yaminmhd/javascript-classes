var Rectangle = require('./Rectangle');
var rect1 = new Rectangle(2,4);
var rect2 = new Rectangle(5,10);


describe('Rectangle 1', function(){
  it('First rectangle object should return an area of 8', () => {
    expect(rect1.area()).toEqual(8);
  });

  it('First rectangle object should return perimeter of 12', () => {
    expect(rect1.perimeter()).toEqual(12);
  });
});


describe('Rectangle 2', function(){
  it('Second rectangle object should return an area of 50', () => {
    expect(rect2.area()).toEqual(50);
  });

  it('Second rectangle object should return perimeter of 30', () => {
    expect(rect2.perimeter()).toEqual(30);
  });
})


