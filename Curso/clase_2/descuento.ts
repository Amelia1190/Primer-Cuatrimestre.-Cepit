import * as readlineSync from "readline-sync";

/*let precioProducto = readlineSync.questionInt(" ingrese el precio del producto: ");
let precioDescuento : number = precioProducto * 0.1;

let precioFinal : number = precioProducto - precioDescuento;
console.log( " el precio del producto es igual" + precioFinal);
console.log("el precio final es"+ precioProducto * 0.9);*/

// estructuras de control: descuento//

let precioProducto : number = 450.5;
let porcentajeDescuento : number = 0.1;
let descuento : number = precioProducto*porcentajeDescuento;
let precioFinal : number = precioProducto-descuento;
console.log(precioFinal);

