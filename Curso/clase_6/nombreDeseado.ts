// Algoritmo NombresDeseados
import * as rls from 'readline-sync';
let dimensionArreglo : number = rls.questionInt(`Ingrese la dimension del arreglo: `);
let nombrePersonas : string[] = new Array (dimensionArreglo);
let indice : number;
for (indice = 0; indice < dimensionArreglo; indice++) {
nombrePersonas[indice] = rls.question(`Ingrese el nombre que quiere poner en el lugar ${indice}: `);
}
for (indice = 0; indice < dimensionArreglo; indice++) {
console.log(`La persona que ingreso en la posicion ${indice} es: ${nombrePersonas[indice]}`);
}