"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//arreaglos: MESES DEL AÑO.
var readlines = require("readline-sync");
/*let arregloMes : string[] = new Array (12) ;
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";
arregloMes[2] = "Marzo";
arregloMes[3] = "Abril";
arregloMes[4] = "Mayo";
arregloMes[5] = "Junio";
arregloMes[6] = "Julio";
arregloMes[7] = "Agosto";
arregloMes[8] = "Septiembre";
arregloMes[9] = "octubre";
arregloMes[10] = "Noviembre";
arregloMes[11] = "Diciembre";
let nroMes : number = readlines.questionInt("Indique el numero de mes que le interesa: ");
let indice : number = nroMes - 1;
console.log("El mes es ", arregloMes[indice] );*/
// ARREGLO NUMERO.
/*let num : number[] = new Array (7) ;
let indice: number = 0;
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;
while (indice < 7) {
console.log ("El numero en la posicion ", indice, " es ", num[indice]);
indice++;
}*/
// Arreglo nro deseado:
var nroDeseadoArreglo = new Array(5);
var nro, indice;
for (indice = 0; indice < 5; indice++) {
    nro = readlines.questionInt("Indique el numero que desea incorporar en la posicion ".concat(indice, ": "));
    nroDeseadoArreglo[indice] = nro;
}
for (indice = 0; indice < 5; indice++) {
    console.log("El numero en la posicion ".concat(indice, " es ").concat(nroDeseadoArreglo[indice]));
}
