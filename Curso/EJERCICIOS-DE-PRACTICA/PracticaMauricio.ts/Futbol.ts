/*El DT de los infantiles del equipo de fútbol desea saber el promedio de la edad de los chicos. 
La edad de los chicos va de 3 a 7 años. Las edades son cargadas al azar 
(use la función aleatorio(menorValor, mayorValor)), es decir aleatorio (3,7).
Muestre todas las edades y el promedio de las mismas*/

import * as rls from "readline-sync";

let dimensionArreglo: number=rls.questionInt(" Ingrese las cantidad de jugadores: ");
let edadNinios: number[]= new Array(dimensionArreglo);
   
function cargarJugadores( edadNinios:number[], dimensionArreglo:number){     // Una funcion y luego llamo otra funcion.
    let i:number=0
    for(let i=0; i < edadNinios.length; i++){
        edadNinios[i]= Aleatorio(3,7)
    }
}



function Aleatorio(menorValor: number, mayorValor: number): number {
   let numeroadeVolver: number=0;
   numeroadeVolver= Math.random() *( Math.random()* (numeroMayor - numeroMenor +1) ) // Genera numeros entre 0 y 1.

    return numeroadeVolver;
}
function mostrarJugadores(edadNinios: number[], dimensionArreglo:number ){
    let i: number=0;
    let jugadores: string="";
    for(i; i < edadNinios.length; i++);
    jugadores+=edadNinios[i] +"  ";
    console.log( " los juagdores son: ", jugadores);
}

function obtenerPromedioEdadesJugadores(edadNinios: number[],dimensionArreglo:number):number {
    let suma: number=0;
    let promedio: number=0;
    suma= suma + edadNinios[1];
    promedio= suma/dimensionArreglo;
    return promedio;
}
console.log( "EL PROMEDIO DE EDADES ES:", obtenerPromedioEdadesJugadores);
console.log("mostrar edades: ",mostrarJugadores );


/*console.log("el promedio de las edades", promedioEdad)*/            //funcion aleatoria.