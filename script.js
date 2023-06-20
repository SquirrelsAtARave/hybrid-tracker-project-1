//initializing variables
var currentMonth = dayjs().month();
var currentYear = dayjs().year();
var daysInOffice = 0;
var percentageInOffice = 0;
var storedDays = [];
var state;
var number;
console.log(currentMonth);
console.log(currentYear);

//get the number of days in a month
function getDaysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

//function to see if the day is a weekday
function isWeekday(year, month, day) {
  var currentDay = new Date(year, month, day).getDay();
  console.log("day: " + currentDay);
  return currentDay != 0 && currentDay != 6;
}

//get the number of working days in a month
function getWeekdaysInMonth(month, year) {
  var weekdays = 0;
  for (var i = 0; i < daysInMonth; i++) {
    if (isWeekday(year, month, i + 1)) weekdays++;
  }
  return weekdays;
}

var daysInMonth = getDaysInMonth(currentMonth, currentYear);
var numberOfWeekdays = getWeekdaysInMonth(currentMonth, currentYear);


//displaying the number of Working days in a month
workingDaysEl = document.getElementById("working-days");
numberOfWeekdays = numberOfWeekdays - 1; //hardcoding for the Juneteenth holiday in June;
workingDaysEl.textContent = numberOfWeekdays;

daysEl = document.getElementById("days");
dayEl = document.querySelectorAll(".day");

init();

//Event listener function to capture days in/not in the office
daysEl.addEventListener("click", function (event) {
  //getting the element to know which day was clicked
  var element = event.target;
  state = "";
  number = "";
  
  if (element.matches(".day")) {
    //getting the elements data attributes
    state = element.getAttribute("data-state");
    number = element.getAttribute("data-number");
 

    if (
      isWeekday(currentYear, currentMonth, number) &&
      state !== null &&
      number !== null
    ) {
      //if the day is not clicked (state = off), set the state to on and change the color to indicate day has been selected
      //increment days in office and update the local storage
      if (element.dataset.state === "off") {
        daysInOffice++;
        element.dataset.state = "on";
        element.classList.add("has-background-warning");
        storedDays[number - 1].ststate = "on";
        setStorage();
      } 
      //if the day is clicked (state = on), set the state to off and change the color to indicate day has been unselected
      //decrement days in office and update the local storage
      else if (daysInOffice > 0) {
        daysInOffice--;
        element.dataset.state = "off";
        element.classList.remove("has-background-warning");
        storedDays[number - 1].ststate = "off";
        setStorage();
      }
      renderNumbers();
    }
  }
});

//function to display Days in office and the calculation and display of Percentage in Office
function renderNumbers() {
  officeDaysEl = document.getElementById("office-days");
  officeDaysEl.textContent = daysInOffice;
  percentageEl = document.getElementById("percentage");
  percentageInOffice = ((daysInOffice / numberOfWeekdays) * 100).toFixed(1);
  percentageEl.textContent = percentageInOffice + " %";
}

// function to set localStorage
function setStorage() {
  localStorage.setItem("storedDays", JSON.stringify(storedDays));
}

//function to display the month from local storage
function renderMonth() {
  var currentState = "";
  var currentNumber = 0;
  for (i = 0; i < dayEl.length; i++) {
    currentState = dayEl[i].getAttribute("data-state");
    currentNumber = dayEl[i].getAttribute("data-number");
    if (currentState !== null && currentNumber !== null) {
      for (j = 0; j < storedDays.length; j++) {
        if (storedDays[j].stday == currentNumber) {
          dayEl[i].dataset.state = storedDays[j].ststate;

          if (storedDays[j].ststate == "on") {
            dayEl[i].classList.add("has-background-warning");
            daysInOffice++;
          }
        }
      }
    }
  }
  renderNumbers();
}

//initial function to get info from local storage and to set local storage if it does not exist
function init() {
  // Get stored days from localStorage
  var storedDay;
  var storedMonth = JSON.parse(localStorage.getItem("storedDays"));

  // If days were retrieved from localStorage, update the storedDays array to it
  if (storedMonth !== null) {
    console.log("not null");
    storedDays = storedMonth;
  } else {
    console.log("null");
    for (i = 1; i <= daysInMonth; i++) {
      storedDay = { stday: i, ststate: "off" };
      storedDays.push(storedDay);
    }
    setStorage();
  }

  renderMonth();
}
