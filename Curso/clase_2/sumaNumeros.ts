import * as readlineSync from "readline-sync";

/*let primerNumero : number = readlineSync.questionInt( "Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
let segundoNumero : number = readlineSync.questionInt( "Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);*/


//secuencia: SUMA DE DOS NUMEROS//

import * as rls from "readline-sync";

let primerNumero : number = readlineSync.questionInt( "Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
let segundoNumero : number = readlineSync.questionInt( "Ingrese el segundo número: ");
console.log("el segundo número es ", segundoNumero);
let resultado : number = primerNumero + segundoNumero;
console.log("El resultado de la suma es ", resultado);