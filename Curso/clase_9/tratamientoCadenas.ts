


let cadena : string = 'Juan Pérez';

let inicialNombre:string= cadena[0];
let inicialApellido: string= cadena[5];

console.log("Posición 0 " + inicialNombre);
console.log("Posicion 5 " + inicialApellido);


//longitud(propiedad que nos devuelve la cantidad de elementos que tiene un arreglo)

 let arreglo: string[] = ["a","b","c"];
console.log(arreglo.length);

//indexOf(textoBuscado)

let texto: string= "Tengo que hacer muchos ejercicios";

console.log(texto.indexOf("hacer"));
 console.log(texto.indexOf("hacer",20));

// //lastIndexOf(textoBuscado)

 let texto2 : string ="Tengo que hacer y hacer y hacer muchos ejercicios";
 console.log(texto2.lastIndexOf('hacer'));

//  //subcadena(inicio, final)
console.log(texto2.substring(10,15));

//substr(inicio, largo)
console.log(texto2.substr(10,21));  //texto que ya no se usa por eso lo tacha.

//A minúsculas y mayúsculas
 let textoCombinado: string= "AaAaA";

 console.log(textoCombinado.toLowerCase()); //todo una minúscula
 console.log(textoCombinado.toUpperCase()); //todo a mayúscula
 console.log(textoCombinado[1].toUpperCase());// muestra la primera letra en mayuscula.


 //Encadenar()
let numero: number = 234;

console.log(numero.toString());

let numeroString: string = "234";

 console.log(parseInt(numeroString));//lo convierte en numero.
console.log(typeof parseInt(numeroString));// lo convierte en texto(la devolucion)
 console.log(typeof numeroString);// de que tipo es numero string.

 let numDecimalString: string = "3.20";

 console.log(parseFloat(numDecimalString));

 let numeroNumber : number = parseInt(numeroString);

// dividir(a)SPLIT. Sectoriza el texto/numero separando con comillas. 

let arrayDeNumeros : string[] = numeroString.split("");
console.log(arrayDeNumeros);                            //
console.log(texto.split(" "));
/*console.log(numDecimalString);*/


//