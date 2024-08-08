//Encontrar el elemento más grande del arreglo:
/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/



let num: number[] = new Array(12);

let numeroMayor = num[0];

num[0] = 4;
num[1] = 7;
num[2] = 9;
num[3] = 3;
num[4] = 1;
num[5] = 45;
num[6] = 67;
num[7] = 23;
num[8] = 29;
num[9] = 78;
num[10] = 11;
num[11] = 16;


for (let indice = 1; indice < num.length; indice++) {
    if (num[indice] > numeroMayor) {
        numeroMayor = num[indice];
    }
}

console.log("El número mayor del array es:", numeroMayor);





