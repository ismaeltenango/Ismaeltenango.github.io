let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let d = new Date();
let dayNames = daynames[d.getDay()];
let monthName = months [d.getMonth()];
let year = d.getFullYear();
let fulldate = dayNames + ", "+ monthName + " " + d.getDate() + ", " + d.getFullYear();
document.getElementById("currentdate").textContent = fulldate;