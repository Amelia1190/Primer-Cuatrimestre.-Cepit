/*console.log(5*10);

// area= base*altura
//base=5
//altura=10

let base: number= 5;
let altura: number= 10;

let area: number = base * altura;

console.log( area);
console.log( "el area del rectangulo es" + area );

//Algoritmo
console.log("1-pescado");
console.log("2-leche");
console.log("3-queso");

//Variable

let numero: number= 10;
console.log(numero);

numero= 20;
console.log (numero);

let mensaje: string = ("hola alumnos");

console.log(mensaje);

let mensaje2: string= (" Bienvenidos 'entre comillas'");
console.log(mensaje2); */


// Segundo ejercico: secuencia//

import * as readlineSync from "readline-sync";

let base : number=  readlineSync.questionInt( "Ingrese la base: ");
let altura : number = readlineSync.questionInt( "Ingrese la altura: ");

let area : number = base * altura;
console.log("El área es: ", area);

