export default class WeekDayCalc extends Date {

  getDayName() {
    if(this.getDay() === 3){
      return "wednesday";
    }
  }
}