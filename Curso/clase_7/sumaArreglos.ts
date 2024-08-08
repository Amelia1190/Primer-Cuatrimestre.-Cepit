//Algoritmo SumarArreglos
import * as rls from "readline-sync";
let v1 : number[] = new Array(6);
let v2 : number[] = new Array(6);
let vSuma : number[] = new Array(6);
let indice : number;
//Cargo el vector v1
for (indice = 0; indice < 6; indice++) {
v1[indice]=rls.questionInt(`Ingrese el valor de v1[ ${indice} ]`);
}
//Cargo el vector v2
for (indice = 0; indice < 6; indice++) {
v2[indice]=rls.questionInt(`Ingrese el valor de v2[ ${indice} ]`);
}
//Sumo los valores y muestro
for (indice = 0; indice < 6; indice++) {
vSuma[indice] = v1[indice] + v2[indice];
console.log (`vSuma[ ${indice} ]= ${vSuma[indice]}`);
}