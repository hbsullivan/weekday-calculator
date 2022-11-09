import WeekDayCalc from './../src/js/calculator.js';

describe ('WeekDayCalc', ()=> {
  let weekday;

  beforeEach(() => {
    weekday = new Weekday();
  });

  test('it should be able to create a date object', () => {
    expect(weekday).toBeInstaceOf(Date);
  });
});



// describe('Rectangle', () => {
//   let rectangle;

//   beforeEach(() => {
//     rectangle = new Rectangle(3,5);
//   });

//   test('should correctly create a rectangle object using two sides', () => {
//     expect(rectangle.side1).toEqual(3);
//     expect(rectangle.side2).toEqual(5);
//   });

//   test('should correctly get the area of a rectangle object', () => {
//     expect(rectangle.getArea()).toEqual(15);
//   });
// });