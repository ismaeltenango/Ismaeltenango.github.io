window.addEventListener('load', (event)=>{
    const lu = document.querySelector('#currentdate');
    lu.textContent = document.lastModified;

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();
})

function toggleMenu() {
   
    document.getElementById('primariNav').classList.toggle('hide');
}

