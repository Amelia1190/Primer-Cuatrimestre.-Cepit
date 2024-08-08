/*function burbuja(arreglo:number[],cantidad: number)
     let i:number,j:number;
     for (i=0; i < cantidad; i++)
    for (j= 2; j< (cantidad -1) ; )*/
//FUNCION PARA ARMAR UN NUMERO RANDOM ENTRE 2 Y NUMERO AZAR.



//Funcion para crear un numero ramdom entre 0 y numAzar
function Azar(numAzar: number): number {
    return Math.floor(Math.random() * numAzar);
}

//Funcion para cargar el arreglo
function cargar(arreglo: number[], cantidad: number, numAzar: number) {
    for (let i: number = 0; i < cantidad; i++) {
        arreglo[i] = Azar(numAzar);
    }
}

//En esta funcion mostramos los valores del arreglo
function escribirEnUnaLinea(arreglo: number[], cantidad: number) {

    let vector: string = "";
    for (let i: number = 0; i < cantidad; i++) {
        vector += `${arreglo[i]} `;
    }
    console.log(vector);
}

//En este arreglo vamos a poder cambiar las posiciones "i" y "j"
function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
}

//Compara los valores de las posiciones "i" y "j" del arreglo que pasamos por parametro
function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}



//Aplica el algoritmo Bubble sort
function burbuja(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}


// let limite: number = 10;
// let arreglo: number[] = new Array(limite);
// cargar(arreglo, limite, 100);
// escribirEnUnaLinea(arreglo, limite);
// burbuja(arreglo, limite);
// escribirEnUnaLinea(arreglo, limite);

Azar(9);