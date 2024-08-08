"use strict";/* nos ayuda con el codigo, corrige errores*/
  
/*variable1=5;
variable2="hola";*/
function saludar(){
    console.log("hiciste clic en el boton");
    let titulo=document.getElementById("titulo").innerText=titulo
}
/*alert("Hola Mundo");
/*document.getElementById("#titulo")// # SI SE TRATA DE UN ID SE USA.
document.getElementById(".titulo")//.  SI SE TRATA DE UN ID SE USA PARA ENCONTRAR UN ELEMENTO DE X CLASES.*/

let btn=document.getElementById("btn1");
btn.addEventListener("click",cambiarTexto)