"use strict";
/*• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var claveNombre = "Juan";
var contraseñaIngreso = "claveJuan";
var usuario = rls.question("ingrese la clave : ");
var contraseña = rls.question("ingresela contraseña. ");
if (claveNombre == usuario && contraseñaIngreso == contraseña) {
    console.log("HOLA JUAN, BIENVENIDO");
}
else {
    console.log("la contraseña y el usurio ingresado son incorrectos");
}
