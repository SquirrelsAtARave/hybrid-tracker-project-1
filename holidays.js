//Third party API to get Public holidays of the month of June

fetch("https://date.nager.at/api/v3/publicholidays/2023/US")
  .then((response) => response.json())
  .then((data) => {
    const federalHolidays = data.filter(
      (holiday) => holiday.types[0] === "Public"
    );

    const juneHolidays = federalHolidays.filter((holiday) => {
      const day = dayjs(holiday.date, "YYYY-MM-DD");
      return day.format("M") == 6;
    });

    juneHolidays.forEach((holiday) => {
      const day = dayjs(holiday.date, "YYYY-MM-DD");
      console.log(day);
      var holidays = $(`
        <div>
        <h2>${holiday.name}
        ${day.format("dddd, MMMM DD, YYYY")}
        </div>`);
      $("#holidays").append(holidays);
      renderHolidays(day);
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });

  //function to show the holiday on the calendar and make the day un-clickable.
function renderHolidays(day) {
  var holiday2 = dayjs(day).date();
  console.log("holiday" + holiday2);
  dayEl = document.querySelectorAll(".day");

  for (i = 0; i < dayEl.length; i++) {
    currentState = dayEl[i].getAttribute("data-state");
    currentNumber = dayEl[i].getAttribute("data-number");

    console.log("currentnumber: " + currentNumber);

    if (currentNumber == holiday2) {
      delete dayEl[i].dataset.state;
      dayEl[i].classList.add("has-background-danger-light");
      var workingDays = document.getElementById("working-days").value;
      console.log("wk1: " + workingDays);

      workingDays--;
      console.log("wk2: " + workingDays);
    }
  }
}
