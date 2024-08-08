
/*function sumarArreglo(arreglo: number[]): number {
    let i:number=0;
    let suma: number = 0;
    for ( i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor <7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";

}
console.log(establecerColorPorNota(7))


function obtenerPromedio(arr:number[], sumarArreglo: number[]): number {    
    let suma: number = 0;
    let promedio: number;   
    
    for(let index=0; index < arr.length; index++){  // DECLARA ARR. ES MALA PRACTICA.
    suma=  suma + arr[i]}
        promedio= suma/ arr.length;

        console.log (promedio)  // va retun porque la funcion se llama obtener promedio y no mostrar promedio.
}*/




//EJERCICIO 2. EXAMEN.
/*Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). 
Cuente la cantidad de A, E y O que hay en ese string y almacene esas cantidades 
en otro arreglo de 3 elementos en el orden que usted desee.
Pegar el codigo aquí*/


//ingreso la longitud del arreglo de  15 caracteres.
let letrasCantidad:string= "A,B,F,E,O,R,G,T,Y,A,H,D,F,O,G"; 

// Inicializo cada una de las vocales(Varibles) en 0;
let letrasA: number=0;    
let letrasE: number=0;
let letrasO: number=0;

// Como necesito un contador fijo utilizo un FOR.
    for( let i=0; i < letrasCantidad.length; i++){  
        if(letrasCantidad[i]== "A"){    //Si letrasCantidad del indice es igual a A, A aumenta en 1.
            letrasA++;
        }else if (letrasCantidad[i]== "E"){  // Lo mismo sucede con E.
            letrasE++;
        }else if (letrasCantidad[i]== "O"){   // A lo igual con O.
            letrasO++;
        }
           
}   

// Declaro BuscarLetras para que recorra mi arreglo y encuentre las letras buscadas.
let BuscarLetras: number[]=[letrasA, letrasE, letrasO]; 

                                          
//Imprimo por partalla que cantidad hay de cada letra.
console.log("Cantidad de A:", letrasA );
console.log("Cantidad de E:", letrasE );
console.log("Cantidad de O:", letrasO );



/*function sumarLetras(letrasA: number, letrasE: number, letrasO: number, arreglo: number[]): number {
let i:number=0; 
let suma:number=0;
suma=letrasA+letrasE+letrasO;
    for ( i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

console.log("La suma de A, E y O es:", sumarLetras(letrasA, letrasE, letrasO, BuscarLetras))*/

function sumarTodasLasLetras(cadena: string): number {
    let suma = 0;
    for (let i = 0; i < cadena.length; i++) {
        // Ignoramos las comas en la cadena
        if (cadena[i] !== ',') {
            suma++;
        }
    }
    return suma;
}

console.log("La suma total de letras es:", sumarTodasLasLetras(letrasCantidad));

    