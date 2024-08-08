"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*let precioProducto = readlineSync.questionInt(" ingrese el precio del producto: ");
let precioDescuento : number = precioProducto * 0.1;

let precioFinal : number = precioProducto - precioDescuento;
console.log( " el precio del producto es igual" + precioFinal);
console.log("el precio final es"+ precioProducto * 0.9);*/
// estructuras de control: descuento//
var precioProducto = 450.5;
var porcentajeDescuento = 0.1;
var descuento = precioProducto * porcentajeDescuento;
var precioFinal = precioProducto - descuento;
console.log(precioFinal);
