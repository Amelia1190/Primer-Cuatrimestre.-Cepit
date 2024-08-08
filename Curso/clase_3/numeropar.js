"use strict";
/*•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo*/
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("ingrese un numero:");
if (numero == 0) {
    console.log(" el numero ingresado es cero");
}
else if (numero % 2 == 0) {
    console.log("el numero" + numero + "es par");
}
else {
    console.log(" el numero" + numero + "es impar");
}
