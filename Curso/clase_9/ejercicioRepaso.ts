import * as rls from 'readline-sync' //20/5

/*function convertirEnClave(palabra: string): string {
    let vocales: string = "aeiou";
    let signos: string = ".,;:!"
     let matematicos: string = "0123456789+-";
     let clave: string = "";

     for (let index = 0; index < palabra.length; index++) {
         if (matematicos.indexOf(palabra[index]) >= 0) {
            clave += palabra[index];
         } else {
             if (vocales.indexOf(palabra[index]) >= 0) {
                clave += signos[vocales.indexOf(palabra[index])];
             } else {
                 if (palabra[index] == palabra[index].toUpperCase()) clave += palabra[index].toLowerCase(); else clave += palabra[index].toUpperCase();
             }
        }
     } return clave;
}

let palabra: string = rls.question("Indique la palabra a codificar: ");
 console.log(`La palabra ingresada: ${palabra} se convierte en: ${convertirEnClave(palabra)}`);



//camelCase


function pasarACamelCase(texto: string): string {
    let aMayusc: boolean = false;
     let camelCase: string = "";
    for (let index = 0; index < texto.trim().length; index++) {
        if (texto[index] === " ") {
            aMayusc = true;
} else {
            if (aMayusc) {
                 camelCase += texto[index].toUpperCase(); 
                aMayusc = false;
            } else {
                 camelCase += texto[index].toLowerCase();

            }
        }     }
     return camelCase;
 }

 let texto: string = rls.question("Ingrese un texto: ");

console.log(`El texto: ${texto} convertido a CamelCase queda: ${pasarACamelCase(texto)}`);

//producto escalar

function cargarVector(v: number[], cantidad: number) {
    let indice: number;
    for (indice = 0; indice < cantidad; indice++) {
        v[indice] = rls.questionInt("Ingrese el valor en " + indice + ": ");
    }
}

let cantidad: number= rls.questionInt("Ingrese la longitud del arreglo: ");

let arreglo1: number[] = new Array(cantidad);
let arreglo2: number[] = new Array(cantidad);

console.log("Cargar vector 1");
cargarVector(arreglo1, cantidad);
console.log("Cargar vector 2");
cargarVector(arreglo2, cantidad);

function multiplicarVector(v1:number[], v2:number[], cantidad:number):number {
    let acum:number=0;
    
    for(let indice:number = 0; indice < cantidad; indice++ ){
        acum = acum + (v1[indice] * v2[indice]);
    }

    return acum;
}


console.log(multiplicarVector(arreglo1,arreglo2, 2));*/





//promedio escolar

 let numAlum: number = rls.questionInt("Ingrese el número de alumnos: ");
 let alumnos: string[] = new Array(numAlum);
 let nota1: number[] = new Array(numAlum);
 let nota2: number[] = new Array(numAlum);
 let nota3: number[] = new Array(numAlum);


 for (let indice = 0; indice < numAlum; indice++) {
       alumnos[indice] = rls.question("Nombre: ");
    nota1[indice] = rls.questionInt("Nota 1er trimestre:");
     nota2[indice] = rls.questionInt("Nota 2do trimestre:");
     nota3[indice] = rls.questionInt("Nota 3er trimestre:");
 }

 let alumBuscado: string = rls.question("A quien busca: ");
 let encontrado: boolean = false;
 let promedio: number = 0;
 let i: number = 0;

 while (i < numAlum && !encontrado) {
     if (alumnos[i] == alumBuscado) {
         encontrado = true;
         promedio = nota1[i] + nota2[i] + nota3[i];
         promedio /= 3;
     }
     i++;
 }

 if (encontrado) {
     console.log("El promedio de ", alumBuscado, " es ", promedio);
 } else {
     console.log("No se pudo encontrar a ", alumBuscado);
 }