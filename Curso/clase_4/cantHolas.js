
/*let cantHolas: number= 1
while(cantHolas<=5 ) {
console.log ("Hola");
cantHolas = cantHolas + 1 ;
}*/
//ejercico del promedio//
/*let suma: number, nota: number, promedio: number, contador: number;
contador=1;
suma=0;

while(contador <= 10){
    nota= readlineSync.questionFloat( "ingrese una nota"  );
    suma= suma + nota;
    contador = contador +1;
}
promedio= suma/10;
console.log (" el promedio del alumno es:" + promedio );*/
// Espera del colectivo//
var llegadaColectivo;
console.log("Esperando el colectivo");
llegadaColectivo = readlineSync.question("Llegó el colectivo? (S/N): ");
while (llegadaColectivo == "N") {
    console.log("Esperando el colectivo");
    llegadaColectivo = readlineSync.question("Llegó el colectivo? (S/N): ");
}
console.log("Llegó el colectivo");
