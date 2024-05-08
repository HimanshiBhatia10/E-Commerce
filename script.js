// Script for navigation bar
const bar = document.getElementById('bar');
const close= document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// script for scrolling
let ScrollContrainer = document.querySelector(".pro-container");
let leftBtn = document.getElementById("left-button");
let rightBtn = document.getElementById("right-button");

leftBtn.addEventListener("click", ()=> {
    ScrollContrainer.style.scrollBehavior = "smooth";
    ScrollContrainer.scrollLeft -= 900;
});

rightBtn.addEventListener("click", ()=> {
    ScrollContrainer.style.scrollBehavior = "smooth";
    ScrollContrainer.scrollLeft += 900;
});
