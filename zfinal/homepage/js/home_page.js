
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




