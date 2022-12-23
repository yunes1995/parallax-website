"use strict"
const firstPage = document.querySelector('.firstpage');
const textMain = document.querySelector(".firstpage h1");
const part2 = document.querySelector(".middleground .mg-block");
const part3 = document.querySelector(".foreground .fg-block");
const secondPage = document.querySelector('.secondpage');
const background = document.querySelector('.background');

const MAX_SCROLL = 500;

document.addEventListener("scroll", function (event) {
    let scrollNum = window.pageYOffset;

    if (scrollNum <= MAX_SCROLL) {
        secondPage.style.opacity = 0;
        firstPage.style.opacity = 1;
        let p = scrollNum / MAX_SCROLL;
        textMain.style.transform = `scale(${1 + (0.1 + p)})`;
        part2.style.transform = `scale(${1 + (0.1 + p)})`;
        part3.style.transform = `scale(${1 + (0.1 + p)})`;
        background.style.transform = `scale(${1 + (0.1 + p)})`;
    }
    console.log(scrollNum);











})