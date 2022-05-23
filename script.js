const root = document.querySelector(':root')
const moon = document.getElementById('moon')
//crating sun icon
const sun = document.createElement('i')
sun.classList.add('fa-solid','fa-sun','fa-2x')


moon.addEventListener('click' , ()=> {
    moon.replaceWith(sun)
    root.style.setProperty('--font-colour','white');
    root.style.setProperty('--background-gray','black');
    root.style.setProperty('--background-white','#363636')
})

sun.addEventListener('click' , ()=> {
    sun.replaceWith(moon)
    root.style.setProperty('--font-colour','black');
    root.style.setProperty('--background-gray','#E2E8F0');
    root.style.setProperty('--background-white','#fff')
})