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


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
})

.then(function (jsonObject){
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    // for (let i = 0; i < towns.length; i++ ) {

        let card = document.createElement('section');
        let card2 = document.createElement('section');
        let card3 = document.createElement('section');



        let fish = document.createElement('h2');
        let fish_motto = document.createElement('h3');
        let fish_rain = document.createElement('p');
        let fish_popu = document.createElement('p');
        let img_fish = document.createElement('img');
        fish.textContent = towns[1].name;
        card.appendChild(fish);
        fish_motto.textContent = towns[1].motto;
        card.appendChild(fish_motto);
        fish_rain.textContent = 'Average Rain Fall: ' + towns[1].averageRainfall;
        card.appendChild(fish_rain);
        fish_popu.textContent = 'Current Population: ' + towns[1].currentPopulation;
        card.appendChild(fish_popu);
        img_fish.setAttribute('src', towns[1].photo, 'alt', towns[1].name + ' photo');
        card.appendChild(img_fish);
        img_fish.setAttribute('alt', towns[1].name + ' photo');
        card.appendChild(img_fish);



        let preston = document.createElement('h2');
        let preston_motto = document.createElement('h3');
        let preston_rain = document.createElement('p');
        let preston_popu = document.createElement('p');
        let img_preston = document.createElement('img');
        preston.textContent = towns[5].name;
        card2.appendChild(preston);
        preston_motto.textContent = towns[5].motto;
        card2.appendChild(preston_motto);
        preston_rain.textContent = 'Average Rain Fall: ' + towns[5].averageRainfall;
        card2.appendChild(preston_rain);
        preston_popu.textContent = 'Current Population: ' + towns[5].currentPopulation;
        card2.appendChild(preston_popu);
        img_preston.setAttribute('src', towns[5].photo, 'alt', towns[5].name + ' photo');
        card2.appendChild(img_preston);
        img_preston.setAttribute('alt', towns[5].name + ' photo');
        card2.appendChild(img_preston);



        let soda = document.createElement('h2');
        let soda_motto = document.createElement('h3');
        let soda_rain = document.createElement('p');
        let soda_popu = document.createElement('p');
        let img_soda = document.createElement('img');


        soda.textContent = towns[6].name;
        card3.appendChild(soda);
        soda_motto.textContent = towns[6].motto;
        card3.appendChild(soda_motto);
        soda_rain.textContent = 'Average Rain Fall: ' + towns[6].averageRainfall;
        card3.appendChild(soda_rain);
        soda_popu.textContent = 'Current Population: ' + towns[6].currentPopulation;
        card3.appendChild(soda_popu);
        img_soda.setAttribute('src', towns[6].photo, 'alt', towns[6].name + ' photo');
        card3.appendChild(img_soda);
        img_soda.setAttribute('alt', towns[6].name + ' photo');
        card3.appendChild(img_soda);
        
        


        document.querySelector('div.cities').appendChild(card);
        document.querySelector('div.cities').appendChild(card2);
        document.querySelector('div.cities').appendChild(card3);
    // }
})

