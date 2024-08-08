/*Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
• En dichos casos, solamente
indique el número una vez*/

import * as readlineSync from "readline-sync";

// Solicitar al usuario que ingrese dos números

let numMultiplo: number = readlineSync.questionInt("Ingrese el primer número: ");
let numMultiplo2: number= readlineSync.questionInt("Ingrese el segundo número: ");


// Iterar sobre los números del 1 al 100
for (let contador: number = 1; contador <= 100; contador++) {
    // Verificar si el número actual es múltiplo de alguno de los dos números ingresados
    if (contador % numMultiplo === 0 || contador % numMultiplo2 === 0) {
        // Mostrar el número si es múltiplo
        console.log("los multiplos de 2 y 3 son:",contador);
    }
}

