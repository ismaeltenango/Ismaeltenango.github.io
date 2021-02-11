
let temp = parseInt(document.getElementById('temp').textContent);
let speed = parseInt(document.getElementById('speed').textContent);

f = 35.74 + (0.6215 * temp) - 35.75 * ( speed ** 0.16 ) + 0.4275 * temp * (speed ** 0.16);
   
document.getElementById('windchill').innerHTML = Math.round(f);

