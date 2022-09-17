// var _ = require('lodash');

let css = document.querySelector('h3');
let color1 = document.querySelector('.color-1');
let color2 = document.querySelector('.color-2');
let body = document.getElementById('gradient');
//  body.style.background = 'burlywood';
// let body = document.getElementById('gradient');




// console.log(css);
// console.log(color1);
// console.log(color2);

//There's an input event for input changes
 
// color1.addEventListener('input', function() {
//     console.log(color1.value);
// })

// color2.addEventListener('input', function() {
//     console.log(color2.value);
// })

//So, we want to change the background anytime we select a color from the color picker(s). The background in the DOM is ideally part of the Body tag. So, naturally, that's what we are going to select(The body tag)

//  function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
// }
  
// color1.addEventListener('input', setGradient())

// color2.addEventListener('input', setGradient())

// function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);

//The setGradient function can as well be called in the html input element using the oninput attribute. That works fine too
//<input oninput="setGradient()" type="color"> The only reason one doesn't do that often is cos of separation of concerns

//We can as well add CSS written at the bottom
function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
    css.textContent = body.style.background + ';';  
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);