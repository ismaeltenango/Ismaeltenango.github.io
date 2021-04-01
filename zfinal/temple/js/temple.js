
const navSlide= () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click',()=>{

        //menu
        nav.classList.toggle('nav-active');

        //animation links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.25}s`;
                link.style.height='100%';
            }
        });

        //quitar lineas por una x
        burger.classList.toggle('toggle');
    });

    
    
}

navSlide();


window.addEventListener('load', ()=>{

    const requestURL = '../homepage/js/temples2.json'
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
    card.innerHTML = `
                    <div>
                    <h2>${temple.name}</h2>
                    <p>Fist President: <b>${temple.presidents[0]}</b> list of ${temple.presidents.length}</p>
                    <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>
                    <p>Address: <b>${temple.address1}</b></p>
                    <p>Phone Number: <b>${temple.phone}</b></p>
                    <a href='#'>Make a Reseration</a>
                    </div>
                    <img src='${temple.imageurl}' alt='${temple.name}'>
                    `;

    document.querySelector('#temples').appendChild(card);
}
