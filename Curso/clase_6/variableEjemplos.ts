let mensaje:string = 'Hola Global!!';//es el lugar donde es accesible esa variable.
ambitoVariables();
function ambitoVariables() {    //la variable local esconde a la variable global.
let mensaje:string;
mensaje = 'Hola Mundo!!';
console.log(mensaje);

}


