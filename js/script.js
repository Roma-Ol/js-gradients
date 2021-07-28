"use strict";

let animatedDiv = document.querySelector('.animated'),
    button = document.querySelector('.button'),
    animatedButtonBg = document.querySelector('.button-wrapper'),
    deg = 0;

function animateDiv() {
    animatedDiv.style.background = `background linear-gradient(${deg++}deg, red, orange, yellow, green, blue, pink)`;
    requestAnimationFrame(animateDiv);
 }
requestAnimationFrame(animateDiv);

// function animateBtn() {
//     animatedButtonBg.style.background = `background linear-gradient(${deg++}deg, red, orange, yellow, green, blue, pink)`;
//     requestAnimationFrame(animateBtn);
//  }
// requestAnimationFrame(animateBtn);