"use strict";

let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let box1 = document.getElementById("div1");  
let box2 = document.getElementById("div2");  

// Función para alternar la visibilidad de los divs
button1.addEventListener("click", function() {
    box1.style.visibility = "hidden";
    box2.style.visibility = "visible";
});

button2.addEventListener("click", function() {
    box1.style.visibility = "visible";
    box2.style.visibility = "hidden";
});

