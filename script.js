var currentMonth = dayjs().month();
var currentYear = dayjs().year();
var daysInOffice = 0;
var percentageInOffice = 0;
console.log(currentMonth);
console.log(currentYear);

function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
};

var daysInMonth = getDaysInMonth(currentMonth, currentYear);
console.log(daysInMonth);

function isWeekday(year, month, day) {
  var day = new Date(year, month, day).getDay();
  return day != 0 && day != 6;
}

function getWeekdaysInMonth(month, year) {
  var weekdays = 0;
  for (var i = 0; i < daysInMonth; i++) {
    if (isWeekday(year, month, i + 1))
      weekdays++;
  }
  return weekdays;
}

var numberOfWeekdays = getWeekdaysInMonth(currentMonth, currentYear);

console.log(numberOfWeekdays);

//numbersEl =document.getElementById("numbers")
workingDaysEl = document.getElementById("working-days");
console.log(workingDaysEl)

workingDaysEl.textContent = numberOfWeekdays;

daysEl = document.getElementById("days");
console.log(daysEl);

daysEl.addEventListener("click", function (event) {
  var element = event.target;
  console.log(element);
  if (element.matches(".day")) {
    var state = element.getAttribute("data-state");
    var number = element.getAttribute("data-number");

    if (isWeekday(currentMonth, currentYear, number)) {
      if (state === "off") {
        daysInOffice++;
        element.dataset.state = "on";
      }
      else if (daysInOffice>0){
        daysInOffice--;
        element.dataset.state = "off";
      }
      officeDaysEl = document.getElementById("office-days");
      officeDaysEl.textContent = daysInOffice;
    }

  }

}
);







