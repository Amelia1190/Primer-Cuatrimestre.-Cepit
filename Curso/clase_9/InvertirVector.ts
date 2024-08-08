import * as rls from 'readline-sync'

function mostrarVector(v: string[], cantidad: number) {
    for (let indice = 0; indice < cantidad; indice++) {
        console.log(v[indice] + " ");
    }
}

function mostrarVectorInvertido(v: string[], cantidad: number) {
     for (let indice = cantidad - 1; indice >= 0; indice--) {
         console.log(v[indice] + " ");
     }
 }

function invertirVector(v: string[], cantidad: number) {
    let indiceIzq: number = 0;
    let indiceDer: number = cantidad - 1;
    let aux: string;

    while (indiceIzq < indiceDer) {
        aux = v[indiceIzq];
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}

let palabra: string = rls.question("Ingrese la palabra que desea invertir: ");
let cantidadLetras: number = palabra.length;
let arregloLetras: string[] = palabra.split("");

mostrarVector(arregloLetras,cantidadLetras);
invertirVector(arregloLetras,cantidadLetras);
console.log("Mostrando vector");
mostrarVector(arregloLetras, cantidadLetras);




