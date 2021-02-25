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

function toggleMenu() {
   document.getElementById('primariNav').classList.toggle('hide');
}


if ( dName == 'Friday'){
    document.getElementById('pancake').style.display = "block";
} else {
    document.getElementById('pancake').style.display = "none";
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;	
}

/*
window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#currentdate');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})
*/