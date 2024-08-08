/*Las modificaciones se pueden hacer directamente
en los arreglos que pasamos como parámetro (solo
funciona para arreglos y matrices, no para otros tipos
de datos)

Explicación:
Ejemplo con variable.
1-Creamos una variable “global” y mostramos su valor
2- La modificamos dentro de una función y volvemos a
mostrar su valor.
3- Por último mostramos el valor de la misma luego la
función*/


let variableNumerica:number=0;

console.log("valor de variableNumerica antes de la funcion: " +
variableNumerica);
modificarVariable(variableNumerica);

function modificarVariable(variableNumerica: number) {
variableNumerica=1;
console.log("valor de variableNumerica dentro de la funcion: "
+ variableNumerica);
}

console.log("valor de variableNumerica despues de la funcion: " +
variableNumerica);