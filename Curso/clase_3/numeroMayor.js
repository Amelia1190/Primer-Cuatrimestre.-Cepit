import * as readlineSync from "readline-sync";

let numero1 = rls.questionInt("Ingrese el primer número: ");
let numero2 = rls.questionInt("Ingrese el segundo número: ");
let numero3 = rls.questionInt("Ingrese el tercer número: ");
if (numero1 > numero2 && numero1 > numero3) {
    console.log("El numero " + numero1 + " es el mayor");
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El numero " + numero2 + " es el mayor");
}
else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El numero " + numero3 + " es el mayor");
}
