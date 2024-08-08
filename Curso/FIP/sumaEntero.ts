/*Inicio
Inicializar i = 100
Inicializar suma = 0
Ingresar valor para 'a'
Repetir mientras i > a
   Sumar i a suma
   Decrementar i en 1
Fin del bucle
Mostrar suma
Fin*/
import * as readlineSync from "readline-sync"

let i: number=100;
let suma:number=0;
let entero:number= parseInt( readlineSync.question("ingrese un numero: "));

while(i>entero){
    i+=suma;
    i--;
}

console.log("la suma de los menores que", i, "es", entero );