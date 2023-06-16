



fetch("https://date.nager.at/api/v3/publicholidays/2023/US")
  .then((response) => response.json())
  .then((data) => {
  
    const federalHolidays = data.filter(
      (holiday) => holiday.types[0] === "Public"
    );
    const juneHolidays = federalHolidays.filter((holiday) => {
     
      const day=dayjs(holiday.date, "YYYY-MM-DD");
      return day.format("M") == 6
    });

    juneHolidays.forEach((holiday)=>{
        var holidays = $(`
        <div>
        <h2>Holiday: ${holiday.name}
        </div>`)

        $("#holidays").append(holidays)
    })

   
  })
  .catch((error) => {
    console.error("Error:", error);
  });
