var currentMonth = dayjs().month();
var currentYear = dayjs().year();
var daysInOffice = 0;
var percentageInOffice = 0;
var storedDays = [];
console.log(currentMonth);
console.log(currentYear);

function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
};

var daysInMonth = getDaysInMonth(currentMonth, currentYear);
console.log(daysInMonth);

function isWeekday(year, month, day) {
  var currentDay = new Date(year, month, day).getDay();
  console.log("day: " + currentDay);
  return currentDay != 0 && currentDay != 6;
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
init();

daysEl.addEventListener("click", function (event) {
  var element = event.target;
  console.log(element);
  if (element.matches(".day")) {
    var state = element.getAttribute("data-state");
    var number = element.getAttribute("data-number");
    console.log ("state: " + state);
    console.log ("number: " + number);

    if (isWeekday(currentYear, currentMonth,number) && (state !== null && number !== null)) {
      console.log("weekday");
      if (state === "off") {
        daysInOffice++;
        element.dataset.state = "on";
        element.classList.add("has-background-warning");
        storedDays[number-1].state ="on";
        console.log(storedDays);
        setStorage();
      }
      else if (daysInOffice>0){
        daysInOffice--;
        element.dataset.state = "off";
        element.classList.remove("has-background-warning");
        storedDays[number-1].state ="off";
        console.log(storedDays);
        setStorage()
      }
      officeDaysEl = document.getElementById("office-days");
      officeDaysEl.textContent = daysInOffice;
      percentageEl = document.getElementById("percentage");
      percentageInOffice = (((daysInOffice/numberOfWeekdays) * 100)).toFixed(1);
      percentageEl.textContent = ( percentageInOffice + " %");
    }

  }

}
);

function setStorage(){
  localStorage.setItem("storedDays", JSON.stringify(storedDays));
}

function renderMonth(){
  for (i=1; i<= daysInMonth; i++){
    
  }
}
function init() {
  // Get stored todos from localStorage
  var storedDay;
  var storedMonth = JSON.parse(localStorage.getItem("storageMonth"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedMonth !== null) {
    storedDays = storedMonth;
  }
  else {
    for (i=1; i<= daysInMonth; i++){
      storedDay = { day:i, state:"off"};
      storedDays.push(storedDay);
    }
    setStorage();
  }
console.log(storedDays);
  // This is a helper function that will render todos to the DOM
  renderMonth();
}







