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

        let card = document.createElement('section');
        let div_1 = document.createElement('div');
        let div_photo1 = document.createElement('div');

        let card2 = document.createElement('section');
        let div_2 = document.createElement('div');
        let div_photo2 = document.createElement('div');

        let card3 = document.createElement('section');
        let div_3 = document.createElement('div');
        let div_photo3 = document.createElement('div');



        let fish = document.createElement('h2');
        let fish_motto = document.createElement('h3');
        let fish_rain = document.createElement('p');
        let fish_popu = document.createElement('p');
        let img_fish = document.createElement('img');
        fish.textContent = towns[1].name;
        div_1.appendChild(fish);
        fish_motto.textContent = towns[1].motto;
        div_1.appendChild(fish_motto);
        fish_rain.textContent = 'Average Rain Fall: ' + towns[1].averageRainfall;
        div_1.appendChild(fish_rain);
        fish_popu.textContent = 'Current Population: ' + towns[1].currentPopulation;
        div_1.appendChild(fish_popu);
        img_fish.setAttribute('src','../lesson9/images/photo12.jpg', 'alt', towns[1].name + ' photo');
        div_photo1.appendChild(img_fish);
        img_fish.setAttribute('alt', towns[1].name + ' photo');
        div_photo1.appendChild(img_fish);



        let preston = document.createElement('h2');
        let preston_motto = document.createElement('h3');
        let preston_rain = document.createElement('p');
        let preston_popu = document.createElement('p');
        let img_preston = document.createElement('img');
        preston.textContent = towns[5].name;
        div_2.appendChild(preston);
        preston_motto.textContent = towns[5].motto;
        div_2.appendChild(preston_motto);
        preston_rain.textContent = 'Average Rain Fall: ' + towns[5].averageRainfall;
        div_2.appendChild(preston_rain);
        preston_popu.textContent = 'Current Population: ' + towns[5].currentPopulation;
        div_2.appendChild(preston_popu);
        img_preston.setAttribute('src', '../lesson9/images/photo11.jpg', 'alt', towns[5].name + ' photo');
        div_photo2.appendChild(img_preston);
        img_preston.setAttribute('alt', towns[5].name + ' photo');
        div_photo2.appendChild(img_preston);



        let soda = document.createElement('h2');
        let soda_motto = document.createElement('h3');
        let soda_rain = document.createElement('p');
        let soda_popu = document.createElement('p');
        let img_soda = document.createElement('img');


        soda.textContent = towns[6].name;
        div_3.appendChild(soda);
        soda_motto.textContent = towns[6].motto;
        div_3.appendChild(soda_motto);
        soda_rain.textContent = 'Average Rain Fall: ' + towns[6].averageRainfall;
        div_3.appendChild(soda_rain);
        soda_popu.textContent = 'Current Population: ' + towns[6].currentPopulation;
        div_3.appendChild(soda_popu);
        img_soda.setAttribute('src', '../lesson9/images/photo13.jpg', towns[6].name + ' photo');
        div_photo3.appendChild(img_soda);
        img_soda.setAttribute('alt', towns[6].name + ' photo');
        div_photo3.appendChild(img_soda);
        
        


        document.querySelector('div.cities').appendChild(card);
        document.querySelector('section').appendChild(div_1);
        document.querySelector('section').appendChild(div_photo1);

        
        // function alternate(size, size2){
            
        //     if(size.matches || size2.matches){
        //         document.querySelector('div.cities2').appendChild(card2);
        //         document.querySelector('div.cities2 section').appendChild(div_photo2);
        //         document.querySelector('div.cities2 section').appendChild(div_2);
        //     }
        //     else{
        //         document.querySelector('div.cities2').appendChild(card2);
        //         document.querySelector('div.cities2 section').appendChild(div_2);
        //         document.querySelector('div.cities2 section').appendChild(div_photo2);
        //     }
        // }
        // let size = window.matchMedia('(min-width: 772px)')
        // let size2 = window.matchMedia('(max-width: 1049px)')
        // alternate(size, size2)
        // size.addEventListener(size,size2)
        // size2.addEventListener(size,size2)


        document.querySelector('div.cities2').appendChild(card2);
        document.querySelector('div.cities2 section').appendChild(div_2);
        document.querySelector('div.cities2 section').appendChild(div_photo2);

        document.querySelector('div.cities3').appendChild(card3);
        document.querySelector('div.cities3 section').appendChild(div_3);
        document.querySelector('div.cities3 section').appendChild(div_photo3);
})

