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

const cry = document.querySelector('#copyrightyear');
cry.textContent = new Date().getFullYear();

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

const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=b08bcb8d94b58f5479134fc91470c543&units=imperial';
const requestURL1 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=b08bcb8d94b58f5479134fc91470c543&units=imperial';
fetch(requestURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.main.temp;
    document.getElementById('temp').textContent = jsObject.main.temp_max;
    document.getElementById('description').textContent = jsObject.weather[0].main;
    document.getElementById('temp_min').textContent = jsObject.main.temp_min;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

    let curr = parseInt(document.getElementById('currently').textContent = jsObject.main.temp);
    let speed = parseInt(document.getElementById('speed').textContent = jsObject.wind.speed);

    f = 35.74 + (0.6215 * curr) - 35.75 * ( speed ** 0.16 ) + 0.4275 * curr * (speed ** 0.16);
    
    document.getElementById('windchill').innerHTML = Math.round(f);

})

  

fetch(requestURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecast = jsObject['list'];
    
        counter = 1
        for (let i = 0; i < forecast.length; i++ ) {
            let str = forecast[i].dt_txt;
            string = str.substr(str.indexOf(' ')+1);
            date = str.substr(0,str.indexOf(' '))
            date = new Date(date).toLocaleString('en-us', {weekday:'long'});

            if (string == '18:00:00'){
                document.getElementById('day_name' + counter).innerHTML = date;
                document.getElementById('day' + counter).innerHTML = forecast[i].main.temp;

                var icon_code = forecast[i].weather[0].icon;
                var icon_url = 'https://openweathermap.org/img/w/' + icon_code + '.png';
                document.getElementById('img_day' + counter).setAttribute('src', icon_url);
                document.getElementById('img_day' + counter).setAttribute('alt', forecast[i].weather[0].description + ' icon description');


            counter += 1
            }
        }

})

const requestURL2 = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL2)
    .then(function (response){
        return response.json();
})

.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < (towns[0].events).length; i++ ) {

        let card = document.createElement('section');
        card.classList.add('event_today');
        card.innerHTML = `<p><b>${towns[0].events[i]}</b></p>`;

        document.querySelector('#events').appendChild(card);
    }
})