let dayname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let monts = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nomberber",
    "December",
];
let d = new Date();
let dName = dayname[d.getDay()];
let dMonth = monts[d.getMonth()];
let fulldate = dName + ", " + d.getDate() + " " + dMonth + " " + d.getFullYear();
document.getElementById("currentdate").textContent = fulldate;

window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#currentdate');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})

function toggleMenu() {
   document.getElementById('primariNav').classList.toggle('hide');
}


/*
function pancake();
    pancakeElement = document.getElementById('pancake');
    const formElement = document.form[0];
    formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    pancakeElement.innerHTML = 'Hello Today is Friday Pancake friday!'
    pancakeElement.style.display = 'block';
    document.body.classList.toggle('moveDown')
})
*/

