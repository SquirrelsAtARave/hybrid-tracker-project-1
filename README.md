# Project Title:
hybrid-tracker


# Motivation: 
The development of the hybrid-tracker arose from a specific requirement within the context of hybrid schedules. With the increasing prevalence of employees working remotely and in-office on alternating days, there is a growing need to accurately monitor and record the distribution of workdays between home and the office. Many modern employers now have monthly limits on the percentage of hours employees can spend working remotely. To address this, the hybrid-tracker was created as a solution. By allowing users to select their work location for each day, the tracker efficiently keeps track of office attendance. 

By capturing important data such as the allowed percentage of time for remote work, the app would provide invaluable insights and facilitate efficient planning. Each employee would have the app installed on their devices, enabling them to effortlessly track their work location and monitor their compliance with the allotted work-from-home percentage. This widespread implementation would not only streamline the process but also promote transparency and accountability in hybrid work environments, ultimately leading to increased productivity and a more balanced work-life integration.

In an ideal future scenario, the app designed for employees with hybrid schedules would be seamlessly integrated into every employee's workflow. With widespread adoption, this app would become a fundamental tool for managing and optimizing hybrid work arrangements. 


# Code Style and Features
The code used to build the hybrid-tracker are HTML,CSS and JavaScript. Here is a breakdown of the code and its features:

  - # Variable Initialization:
    currentMonth and currentYear store the current month and year using the Day.js library.
    daysInOffice and percentageInOffice keep track of the number of days worked in the office and the percentage of office days.
    storedDays is an array that holds objects representing the state of each day (whether it's worked in the office or not).
    state and number are variables used to store the current state and number of the clicked day.

    - # Utility Functions:
    getDaysInMonth calculates the number of days in the current month.
    isWeekday checks if a given year, month, and day represent a weekday.
    getWeekdaysInMonth counts the number of weekdays in the current month.

    - # DOM Manipulation:
    The code interacts with HTML elements through various getElementById and querySelectorAll statements.
    The textContent property is used to update the content of specific elements with calculated values.

    - # Event Listeners:
    The code attaches a click event listener to the daysEl element, capturing the clicked day and updating its state accordingly.
    When a day is clicked, the code modifies its state and appearance, updates the daysInOffice count, and recalculates the office percentage.
    The setStorage function is called to save the updated storedDays array to the local storage.

    - # Initialization:
    The init function is responsible for initializing the application state.
    It retrieves the stored month data from the local storage, or if not available, generates the initial storedDays array for the current month.
    The renderMonth function is called to render the initial state of the days based on the stored data.

# Screen Shot Images
images\CalendarScreenshot.jpeg
images\Tracker-Weather-Screenshot.jpg


# Tech Faamework used:
Bulma - An open-source CSS framework that provides a set of responsive, mobile-first CSS styles and components. 
https://bulma.io/documentation/overview/start/


# API Reference:
[a URL] (https://openweathermap.org/)
[a URL] (https://date.nager.at/Api)

# Project Reference
[project page]
[GitHub page]

# Authors:
Vinita Navani
Laurel Kidd
Tina Huang
Jimmy Varos
Alicia Hermez