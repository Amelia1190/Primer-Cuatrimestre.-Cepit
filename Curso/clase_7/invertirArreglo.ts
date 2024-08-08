//Algoritmo InvertirArreglo
import * as rls from "readline-sync";

let cantidad : number = rls.questionInt(`Ingrese la cantidad de números:`);
let v : number[] = new Array (cantidad);
let indice : number;
for (indice = 0; indice<cantidad; indice++) {
v[indice] = rls.questionInt(`Ingrese v[ ${indice} ]: `);
}
let cadena : string ="";
for (indice = cantidad-1; indice>=0; indice--) {
cadena = cadena + v[indice] + " ";
}
console.log(cadena);