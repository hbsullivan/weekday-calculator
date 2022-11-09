import WeekDayCalc from './../src/js/calculator.js';

describe ('WeekDayCalc', ()=> {
  let weekday;

  beforeEach(() => {
    weekday = new WeekDayCalc(2022,10,9);
  });

  test('it should be able to create a date object', () => {
    expect(weekday).toEqual(new Date(2022,10,9));
  });

  test('should be able to return current date in a readable format', () => {
    let date = new Date(2022,10,9);
    expect(weekday.toDateString()).toEqual(date.toDateString());
  });

  test('should be able to return the day of the week of the inputted date', () => {
    weekday = new WeekDayCalc(2022,10,6);
    expect(weekday.getDayName()).toEqual("sunday");
    weekday = new WeekDayCalc(2022,10,7);
    expect(weekday.getDayName()).toEqual("monday");
    weekday = new WeekDayCalc(2022,10,8);
    expect(weekday.getDayName()).toEqual("tuesday");
    weekday = new WeekDayCalc(2022,10,9);
    expect(weekday.getDayName()).toEqual("wednesday");
    weekday = new WeekDayCalc(2022,10,10);
    expect(weekday.getDayName()).toEqual("thursday");
    weekday = new WeekDayCalc(2022,10,11);
    expect(weekday.getDayName()).toEqual("friday");
    weekday = new WeekDayCalc(2022,10,12);
    expect(weekday.getDayName()).toEqual("saturday");
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