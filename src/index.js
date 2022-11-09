import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeekDayCalc from './js/calculator';

function handleDateForm(event) {
  event.preventDefault();
  const date = document.querySelector('#date-input').value;
  console.log(date);
  const inputDate =  new WeekDayCalc(Date.parse(date));
  inputDate.setDate(inputDate.getDate()+1);
  console.log(inputDate.getDate());
  const dayOfWeek = inputDate.getDayName();
  document.getElementById("day-of-week").innerText = dayOfWeek;
}

window.addEventListener("load", function() {
  document.querySelector('#date-form').addEventListener("submit", handleDateForm);
});

