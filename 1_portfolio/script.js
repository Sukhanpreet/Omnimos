console.log("script working");

// let menu=document.querySelector('.menu');

let menu=document.getElementById('menu');
let navLinks=document.querySelector('.nav-links');

menu.addEventListener('click',()=>{
    navLinks.classList.toggle('show');
});


// let overlay = document.querySelectorAll('.pro');

// console.log(overlay);

// for(let i=0;i<overlay.length;i++){
//     overlay[i].addEventListener('hover',()=>{
//         overlay[i].classList.toggle('pro-show');
//     })
// }

let inputs=document.querySelectorAll('form input');

let textarea=document.querySelector('textarea');

let inputArr=[...inputs];

inputArr.push(textarea);


for(let i=0;i<inputArr.length;i++){
    inputArr[i].addEventListener('focus',function(){
        this.parentElement.classList.add('label-sm');
    });
    inputArr[i].addEventListener('blur',function(){
        this.parentElement.classList.remove('label-sm');
    });


}