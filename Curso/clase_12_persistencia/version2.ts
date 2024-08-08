import * as fs from 'node:fs';
const precios: number[] = [525, 3500, 400, 1999]; // declaro arrays y variables.
const productos: string[] = ["Leche", "Galletitas", "Harina","Queso"];
let listaPrecios :string= "";
let listaProductos :string= "";


for ( let i = 0; i < precios.length; i++){  // recorre cada elemnto para concatenar en listaPrecios y listaProductos.
    listaPrecios += `${precios[i]} `;
    listaProductos+= `${productos[i]} `;
    } 
// Ahora si, guardo la informacion...GUARDAR INFORMACION TXT
 
fs.writeFileSync('./precios.txt', listaPrecios);
fs.writeFileSync('./productos.txt', listaProductos);
console.log("los precios de los productos son: ")

// LEER INFORMACION TXT
const datos: string = fs.readFileSync("./productos.txt", "utf8");


const datos1: string = datos.trim(); // SACA LOS ESPACIO ATRAS Y ADELANTE DEL STRING

const nuevoArray1: string[] = datos1.split(" ");

let arrayPrecios: number[] = [];

for (let i = 0; i < precios.length; i++) {
    arrayPrecios[i] = parseInt(precios[i].toString());
}

console.log(arrayPrecios);

console.log(nuevoArray1);

