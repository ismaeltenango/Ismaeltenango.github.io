
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

window.addEventListener('load', (event)=>{
    const images = document.querySelectorAll("[data-src]");

    function preloadImage(img){
        console.log('trying to load '+img);
        const src= img.getAttribute('data-src');
        if(!src){
            return;
        }
        img.src= src;
    }
    const imgOptions = {
        threshold:0.9999,
        rootMargin: '0px 0px -200px 0px'
    }
    const imgObserver = new IntersectionObserver( (entries, imgObserver)=> {
        console.log(entries);
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return;
            }
            else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    },imgOptions);
    images.forEach(image=>{
        imgObserver.observe(image);
    });
});



