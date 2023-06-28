# Project Title
Hybrid-Tracker

## Description
Hybrid-Tracker is a web application for in-office attendance tracking and planning and is equipped with a clickable month’s calendar, federal holiday API feed, and a weather report API for the current and following four days. The user clicks on weekdays worked in-office, to which the application responds by updating the calculation of both number of days worked in-office, and the percentage thereof.  Hybrid-Tracker utilizes the user’s local storage in order that when the page is reloaded, it will display the most recent updates made to the user’s record.

## Motivation 
The development of the hybrid-tracker arose from a specific requirement within the context of hybrid schedules. With the increasing prevalence of employees working remotely and in-office on alternating days, there is a growing need to accurately monitor and record the distribution of workdays between home and the office. Many modern employers now have monthly limits on the percentage of hours employees can spend working remotely. To address this, the hybrid-tracker was created as a solution. By allowing users to select their work location for each day, the tracker efficiently keeps track of office attendance. 

By capturing important data such as the allowed percentage of time for remote work, the app would provide invaluable insights and facilitate efficient planning. Each employee would have the app installed on their devices, enabling them to effortlessly track their work location and monitor their compliance with the allotted work-from-home percentage. This widespread implementation would not only streamline the process but also promote transparency and accountability in hybrid work environments, ultimately leading to increased productivity and a more balanced work-life integration.

In an ideal future scenario, the app designed for employees with hybrid schedules would be seamlessly integrated into every employee's workflow. With widespread adoption, this app would become a fundamental tool for managing and optimizing hybrid work arrangements. 

## Acceptance Criteria

### User Story
As an employee, I need a simple web application to help me plan and track my schedule in order to meet my company’s requirement that 50% of my workdays be in-office.

### Scenario
I need to review my attendance and plan my schedule for next week.

### Given 
I open the web application in a chrome browser and

<strong>IF</strong> I look at the web application page,<br>
<strong>THEN</strong> I will find a display of this month’s calendar laid out in a box grid with white weekday boxes, pink holiday boxes, and grey weekend day boxes.<br>

<strong>IF</strong> I hover the mouse over a weekday that is not a holiday,<br>
<strong>THEN</strong> the box will turn orange.
    <br>

<strong>IF</strong> I click on a weekday that is not a holiday,<br>
<strong>THEN</strong> the box will turn to yellow AND a value of 1 is added to the count for in-office days AND the day will be added to the in-office percentage.
    <br>

<strong>IF</strong> the box is already yellow and I click again,<br>
<strong>THEN</strong> the box turns white AND a value of 1 is removed from the count for in-office days AND the day will be deducted from the in-office percentage.
    <br>

<strong>IF</strong> I click on weekends or holiday(s),<br>
<strong>THEN</strong> the box color and counts will remain the same.
    <br>

<strong>IF</strong> I scroll down the page below the calendar,<br>
<strong>THEN</strong> I will see outputs for number of working days in the month AND number of days worked in-office so far AND the percentage of days worked in-office to the total.
    <br>

<strong>IF</strong> I scroll down below the day counters,<br>
<strong>THEN</strong> THEN I will see a display of upcoming holiday(s) this month provided by the holiday API.
    <br>

<strong>IF</strong> I scroll down below the holiday display and input a city or zipcode,<br>
<strong>THEN</strong> the weather API will provide the weather forecast for today and the following 4 days.
    <br>

<strong>IF</strong> I click on dates I work in-office and then return to reload the page at another time,<br>
<strong>THEN</strong> the web application will retrieve AND display my input from the previous session from the local storage.

 
## Code Style and Features
The code used to build the hybrid-tracker are <strong>HTML,CSS and JavaScript</strong>. Here is a breakdown of the code and its features:

  ### Variable Initialization
  - currentMonth and currentYear store the current month and year using the Day.js library.
  - daysInOffice and percentageInOffice keep track of the number of days worked in the office and the percentage of office days.
  - storedDays is an array that holds objects representing the state of each day (whether it's worked in the office or not).
  - state and number are variables used to store the current state and number of the clicked day.
  ### Utility Functions
  - getDaysInMonth calculates the number of days in the current month.
  - isWeekday checks if a given year, month, and day represent a weekday.
  - getWeekdaysInMonth counts the number of weekdays in the current month.
  ### DOM Manipulation
  - The code interacts with HTML elements through various getElementById and querySelectorAll statements.
  - The textContent property is used to update the content of specific elements with calculated values.
  ### Event Listeners
  - The code attaches a click event listener to the daysEl element, capturing the clicked day and updating its state accordingly.
  - When a day is clicked, the code modifies its state and appearance, updates the daysInOffice count, and recalculates the office percentage.
  - The setStorage function is called to save the updated storedDays array to the local storage.
  ### Initialization
  - The init function is responsible for initializing the application state.
  - It retrieves the stored month data from the local storage, or if not available, generates the initial storedDays array for the current month.
  - The renderMonth function is called to render the initial state of the days based on the stored data.

# Screen Shot Images
<!-- images\Screenshot (348).png -->
<figure>
  <img src="images\Screenshot (348).png" alt="Screenshot of Calendar" style="width:100%"> <figcaption><i>Calendar Screenshot</i></figcaption>
  </figure>
<!-- images\Screenshot (346).png -->
<figure>
  <img src="images\Screenshot (346).png" alt="Screenshot of Federal Holidays API feed displaying Juneteennth on Monday, June 19, 2023 Weather Forecast" style="width:100%"><figcaption><i>Screenshot of Federal Holidays API and Weather API displays</i></figcaption>
</figure>


# Tech Framework used
Bulma - An open-source CSS framework that provides a set of responsive, mobile-first CSS styles and components. 
https://bulma.io/documentation/overview/start/


# API Reference
[OpenWeather] <a href="https://openweathermap.org/">Open Weather</a>
[nager.date] <a href="https://date.nager.at/Api">Federal Holidays</a>

# Project Reference
[project page] <a href="https://ahermez.github.io/hybrid-tracker-project-1/">Hybrid Attendance Tracker</a>
[GitHub page] <a href="https://github.com/ahermez/hybrid-tracker-project-1.git">Github Page</a>

# Credit
[Stack Overflow] <a href=https://stackoverflow.com/questions/7827838/how-can-i-find-the-number-of-business-days-in-the-current-month-with-javascript#:~:text=So[…]tivity%20on>

# Badges
[![CodeFactor](https://www.codefactor.io/repository/github/squirrelsatarave/hybrid-tracker-project-1/badge)](https://www.codefactor.io/repository/github/squirrelsatarave/hybrid-tracker-project-1)

# Authors
- Alicia Hermez
- Jimmy Varos
- Laurel Kidd
- Tina Huang
- Vinita Navani
