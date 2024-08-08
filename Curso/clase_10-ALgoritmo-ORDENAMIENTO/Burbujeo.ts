/*implemente un algoritmo que ordenamiento con el metodo BubbleSort, para que ordene  un  arreglo
de longitud N en orden descendente.*/


let arregloN: number[] = [3, 2, 1, 5, 4, 10, 6];

function burbujaDescendente(arreglo: number[], cantidad: number): void {

    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j +1);
            }
        }
    }
}
//compara si uno es mayor que otro.
function comparar(arreglo: number[], i: number, j: number): number {
    let comparacion: number;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] > arreglo[j]) {  // Debí decir que el elmento "j" es mayor que "i".
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}
//De esta manera se va  a poder cambiar las posiciones "i" y "j"
function intercambiar(arreglo: number[], i: number, j: number) {
    let aux: number;
    aux = arreglo[i];
    arreglo[i] = arreglo[j];
    arreglo[j] = aux;
    
 }
 

burbujaDescendente( arregloN, arregloN.length);

console.log("Arreglo ordenado en orden descendente: ", arregloN);



