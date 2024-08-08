/*Desarrolle un algoritmo que diga el precio de
una compra
La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%*/

let precioCompra: number= 20000;
let porcentajeDes:number=10;
let descuento: number= precioCompra * porcentajeDes;
let compraMayor:number=1000;
let gastoFinal: number= compraMayor-descuento;
console.log( "el clinete debera abonar", gastoFinal);