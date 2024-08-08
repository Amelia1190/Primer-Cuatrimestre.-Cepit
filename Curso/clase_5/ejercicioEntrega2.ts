


/*Ejercico de entrega 2: METODO. Potencia.
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 

import * as rls from "readline-sync";


let base: number = rls.questionInt("ingrese el numero de la base del triangulo: ");
let exponente: number = rls.questionInt("ingrese el exponente:  ");


/*while (exponente < 0) {
    console.log("exponente < 0 es :")
    exponente = rls.questionInt("ingrese el exponente:  ");

}

let resultado: number;

if (exponente > 0) {

    resultado = base ** exponente;

    console.log("el resultado es: " + resultado);

}

else {
    console.log(base ** exponente);
}*/

//utilizando For:


import * as rls from "readline-sync";


let base: number = rls.questionInt("ingrese el numero de la base del triangulo: ");
let exponente: number = rls.questionInt("ingrese el exponente:  ");
let resultado:number=1;


for(let i=0;i < exponente; i++){
  resultado*=base;
}

console.log("el resultado es: "+ resultado);








