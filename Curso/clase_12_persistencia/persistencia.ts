
import * as fs from 'node:fs';
const nombres: string[]= ["JUAN, AMELIA,MILO, MIRTA" ];
let contenido: string= " ";
    for ( let i = 0; i < nombres.length; i++){
    contenido += `${nombres[i]} `;

    }
   
//GUARDAR INFORMACION TXT
fs.writeFileSync('./test.txt', contenido);
console.log("FINALIZADO");

// LEER INFORMACION TXT
const datos: string = fs.readFileSync("./test.txt", "utf8");
console.log(datos);

const datos2: string = datos.trim(); // SACA LOS ESPACIO ATRAS Y ADELANTE DEL STRING
const nuevoArray: string[] = datos2.split(" ");

console.log(nuevoArray);
