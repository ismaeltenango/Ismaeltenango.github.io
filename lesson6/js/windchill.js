const requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b08bcb8d94b58f5479134fc91470c543&units=imperial';
const requestURL1 = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=b08bcb8d94b58f5479134fc91470c543&units=imperial';
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

    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);


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
