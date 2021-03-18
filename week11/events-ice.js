window.addEventListener('load', ()=>{

    const requestURL = 'http://www.ahfx.com/events.php'
    fetch (requestURL)
        .then((response)=>{
            return response.json();
    })
        .then((jsonObject)=>{
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, event]) => {
                eventCalendar(event);           
            });
        });
});
function eventCalendar(event){
    //cosole.log(temple);
    let card = document.createElement('section');
    card.classList.add('events-card');
    card.innerHTML = `<h2>${event.properties.name}</h2>
                    <p>Start: <b>${event.properties.start}</b> to <b>${event.properties.end}<b></p>
                    <p><b>${event.tags}</b></p>
                    <p><b>${event.properties.summary}</b></p>`;

    document.querySelector('#calendar').appendChild(card);
}