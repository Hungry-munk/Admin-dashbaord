const moon = document.getElementById('moon')
//crating sun icon
const sun = document.createElement('i')
sun.classList.add('fa-regular','fa-sun','fa-2x')


moon.addEventListener('click' , ()=> {
    moon.replaceWith(sun)
})

sun.addEventListener('click' , ()=> {
    sun.replaceWith(moon)
})