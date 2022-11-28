console.log("script working");

// let menu=document.querySelector('.menu');

let menu=document.getElementById('menu')
let navLinks=document.querySelector('.nav-links');

menu.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
});