
/*Ejercicio 1: Encuentra el promedio de un array de números
Escribe una función que reciba el array de números como parámetro y devuelva el
 promedio de dichos números. La función debe recorrer el array usando un bucle for.
Ejercicio 2: Encuentra el número más grande del array
Escribe una función que reciba el array de números como parámetro y devuelva el 
número más grande del array.
Ejercicio 3: Encuentra el número más chico del array
Escribe una función que reciba el array de números como parámetro y devuelva el
 número más chico del array.
Ejercicio 4: */



//Ejercicio 1:

let numerosPromedio: number[] = [1, 5, 4, 6, 8, 7, 6, 44, 56, 25, 56, 44];
let suma=0;
let promedioTotal: number= 0
let  i:number = 0
// LA SUMA ES IGUAL A LOS NUMEROS PROMEDIO DEL INDICE.
      
    
function calcular( numerosPromedio:number [], suma: number):void{
    for( let i=0;i<numerosPromedio.length; i++){
     suma+= numerosPromedio[i];                    
}
 promedioTotal= suma/ numerosPromedio.length;                 

}
calcular ( numerosPromedio, suma)
console.log("el promedio de las notas es:"+ promedioTotal)


//EJERCICIO 2: el numero mas grande.
let numeros= [1, 5, 4, 6, 8, 7, 6, 44, 56, 25, 56, 44]
let numeroMayor:number=numeros[0];

    for (let indice = 1; indice < numeros.length; indice++){
        if (numeros[indice] > numeroMayor) {
          numeroMayor=numeros[indice];
        }

    }
    function verificarNumero(numeroMayor: number){
        console.log("El número mayor de la array es:", numeroMayor);
        //return numeroMayor;
    }


    verificarNumero (numeroMayor);



    //Ejercicio 3. Numero menor del array.

    let numeros1= [1, 5, 4, 6, 8, 7, 6, 44, 56, 25, 56, 44]
    let numeroMenor:number=numeros1[0];
    
        for (let indice = 1; indice < numeros1.length; indice++){
            if (numeros1[indice] < numeroMenor) {
              numeroMenor=numeros1[indice];
            }
    
        }
        function verificarNumero2(numeroMenor: number): number {
            console.log("El número menor de la array es:", numeroMenor);
            return numeroMenor;
        }
    
    
        verificarNumero2(numeroMenor);
        

        /*Ejercicio 4:Encuentra el número de veces que aparece un elemento en un array
Escribe una función que reciba un array de números y un número como parámetros, 
y devuelva la cantidad de veces que el número aparece en el array. La función debe recorrer el 
array usando un bucle for.*/ 

import * as rls from 'readline-sync';

let cantidad: number= rls.questionInt(" ingrese la cantidad de elementos del array: ");
let arreglo1: number[]= new Array(cantidad);
let numeroRepetido: number=5;





function cargarArreglo(cantidad2: number, arreglo:number[]): void{
    for(let i=0; i<cantidad2; i++){
        arreglo1 [i]= rls.questionInt ();
    }
}

function encontrarNumero(cantidad: number, arreglo: number[], numeroRepetido: number):number {
    let contador:number=0;
    for (let i=0;i<arreglo.length; i++){ 
        if (numeroRepetido== arreglo1[i]){
            contador++;
        }
            
        }
   return contador;    
          
}
console.log ("Ingrese los numeros de arreglo: ");
cargarArreglo(cantidad, arreglo1);

encontrarNumero(cantidad, numeroRepetido )

console.log(`El numero ${numeroRepetido} se repite ${cantidad} veces.`);


