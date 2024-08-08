/*Guarda la información de los siguientes arrays:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola*/

import * as fs from 'node:fs';
const precios: number[] = [525, 3500, 400, 1999]; // declaro arrays y variables.
const productos: string[] = ["Leche", "Galletitas", "Harina","Queso"];
let listaPrecios :string= "";
let listaProductos :string= "";

// UTILIZO ESTA FUNCION PARA CONVERTIR EL ARRAY DE PRECIOS EN NUMEROS(EVITO QUE ME LO IMPRIMA STRING)UTILIZO parseInt.
function convertirArray (array:string []): number[] {
    let arrayPrecios : number [] = [];
    for (let i=0; i <array.length; i++){
    arrayPrecios [i] = parseInt (array[i]);
    }
    return arrayPrecios
    }  
   
    for ( let i = 0; i < precios.length; i++){  // recorre cada elemnto para concatenar en listaPrecios y listaProductos.
    listaPrecios += `${precios[i]} `;
    listaProductos+= `${productos[i]} `;
    } 
// Ahora si, guardo la informacion...GUARDAR INFORMACION TXT
 
fs.writeFileSync('./precios.txt', listaPrecios);
fs.writeFileSync('./productos.txt', listaProductos);
console.log("los precios de los productos son: ")

// LEER INFORMACION TXT

const datos: string = fs.readFileSync("./precios.txt", "utf8");
const datos1: string = fs.readFileSync("./productos.txt", "utf8");
const datos2: string = datos.trim(); // SACA LOS ESPACIO ATRAS Y ADELANTE DEL STRING
const datos3: string = datos1.trim(); // SACA LOS ESPACIO ATRAS Y ADELANTE DEL STRING
const nuevoArray: string[] = datos2.split(" ");
const nuevoArray1: string[] = datos3.split(" ");

let arrayPrecios: number[] = convertirArray(nuevoArray);


console.log(arrayPrecios)
console.log(nuevoArray1);




