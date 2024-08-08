"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var i, linea;
var numero1 = rls.questionInt("Ingrese un número: ");
;
var numero2 = rls.questionInt("Ingrese el segundo número: ");
;
var opcionMenu = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: ");
var resultadoFuncion = 0;
resultadoFuncion = calcularResultado(numero1, numero2, opcionMenu);
/*modularizacion/ la implementar una calculadora: Implemente un método llamado calcularResultado que reciba por parámetros
 los dos números y la opción y retorne el resultado de la operación:*/
function calcularResultado(numero1, numero2, opcionMenu) {
    var resultado = 0;
    if (opcionMenu == 1) {
        resultado = numero1 + numero2;
    }
    else if (opcionMenu == 2) {
        resultado = numero1 - numero2;
    }
    return resultado;
}
calcularResultado(numero1, numero2, opcionMenu);
console.log(calcularResultado);
