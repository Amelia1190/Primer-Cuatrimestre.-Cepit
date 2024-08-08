//Encontrar el elemento más grande del arreglo:
/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
var nroMayor = new Array();
var num = [];
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
//let numeroM = num[0];
for (var indice = 0; indice < num.length; indice++) {
    if (nroMayor >= num) {
        num = nroMayor;
    }
}
verificarNumero(nroMayor);
function verificarNumero(nroMayor) {
    if (nroMayor % 2 == 0) {
        console.log("El numero mayor es:  ".concat(num, " es PAR"));
    }
    else {
        console.log("El numero Mayor es:  ".concat(num, " es IMPAR"));
    }
}
