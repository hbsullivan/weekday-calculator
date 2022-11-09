import WeekDayCalc from './../src/js/calculator.js';

describe ('WeekDayCalc', ()=> {
  let weekday;

  beforeEach(() => {
    weekday = new WeekDayCalc(2022,10,9);
  });

  test('it should be able to create a date object', () => {
    expect(weekday).toBeInstanceOf(WeekDayCalc);
  });

  test('should be able to return current date in a readable format', () => {
    let date = new Date(2022,10,9);
    expect(weekday.toDateString()).toEqual(date.toDateString());
  });

  test('should be able to return the day of the week of the inputted date', () => {
    expect(weekday.getDayName()).toEqual("wednesday");
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