/*Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27*/
import * as rls from "readline-sync";

let primerNumero : number = rls.questionInt( "Ingrese el primer número: ");
console.log("el primer número es ", primerNumero);
let segundoNumero : number = rls.questionInt( "Ingrese el segundo número: ");

let suma:number =0;

if(primerNumero> segundoNumero){
let Numero= primerNumero;
primerNumero= segundoNumero;
segundoNumero=Numero;
}
for(let i=primerNumero; i<= segundoNumero; i++){
    suma +=i;
}
console.log(`La suma de todos los números entre ${primerNumero} y ${segundoNumero} es ${suma}.`);