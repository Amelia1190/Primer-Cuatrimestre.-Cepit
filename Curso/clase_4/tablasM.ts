/*Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as readlineSync from "readline-sync";
let numeroIngresado:number= readlineSync.questionInt(" ingrese el primer numero:");
let hasNum: number=readlineSync.questionInt(" ingrese el segundo numero:");

console.log(`Tabla de multiplicación del ${numeroIngresado} hasta ${hasNum}:`);

for(let i=1; hasNum<=i; i++){
    console.log(` el ${numeroIngresado}* ${hasNum} es:`)
}
