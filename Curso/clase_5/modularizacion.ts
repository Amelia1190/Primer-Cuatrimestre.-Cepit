/*Implementar una Calculadora

•Implemente un método llamado dibujarGuiones
para evitar el código repetido*/

import * as rls from "readline-sync";

let numero1 : number = rls.questionInt("Ingrese un número: "); ;
let numero2 : number = rls.questionInt("Ingrese el segundo número: "); ;
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
let resultadoFuncion:number=0;

/*modularizacion/ la implementar una calculadora: Implemente un método llamado calcularResultado que reciba por parámetros
 los dos números y la opción y retorne el resultado de la operación*/

function calcularResultado (numero1:number, numero2:number, opcionMenu:number):number {
    let resultado:number=0;
    if (opcionMenu == 1) {
    resultado = numero1 + numero2;   
    } else if (opcionMenu == 2) {
    resultado = numero1 - numero2;   
    
}
return resultado;
}
resultadoFuncion= calcularResultado( numero1,numero2,opcionMenu);

dibujarGuionesN(resultadoFuncion)
console.log("el resutado es:", resultadoFuncion);
dibujarGuionesN(resultadoFuncion)

function dibujarGuionesN (numerodeGuiones : number) {
    let i : number
    let linea : string = "";
    for (i = 0; i <= numerodeGuiones; i++) {
               linea = linea + "-";
    };
        console.log(linea);
}