export default class WeekDayCalc extends Date {

  getDayName() {
    if(this.getDay() === 0){
      return "sunday";
    }else if(this.getDay() ===1){
      return "monday"
    }else if(this.getDay() ===2){
      return "tuesday"
    }else if(this.getDay() ===3){
      return "wednesday"
    }else if(this.getDay() ===4){
      return "thursday"
    }else if(this.getDay() ===5){
      return "friday"
    }else {
      return "saturday"
    }
  }
}