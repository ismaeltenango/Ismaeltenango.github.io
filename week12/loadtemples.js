window.addEventListener('load', ()=>{

    const requestURL = '../week12/temples2.json'
    fetch (requestURL)
        .then((response)=>{
            return response.json();
    })
        .then((jsonObject)=>{
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple);
                //buildTempleCard(jsonObject[0]);
            
            });
            //console.log(jsonObject[1].presidents[4]);
        });
});
function buildTempleCard(temple){
    //cosole.log(temple);
    let card = document.createElement('section');
    card.classList.add('temple');
    card.innerHTML = `<h2>${temple.name}</h2>
                    <img src='${temple.imageurl}' alt='${temple.name}'>
                    <p>Fist President: <b>${temple.presidents[0]}</b> list of ${temple.presidents.length}</p>
                    <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>
                    <p>Address: <b>${temple.address1}</b></p>
                    <p>Phone Number: <b>${temple.phone}</b></p>`;

    document.querySelector('#temples').appendChild(card);
}



