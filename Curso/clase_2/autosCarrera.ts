import * as readlineSync from "readline-sync";
let vueltasAuto:number=readlineSync.questionInt( " tiempo de la primera vuelta: ");
let vueltasAuto2:number=readlineSync.questionInt( " tiempo de la segunda vuelta: ");
let vueltasAuto3:number=readlineSync.questionInt( " tiempo de la primera vuelta: ");
let vueltasAuto4:number=readlineSync.questionInt( " tiempo de la primera vuelta: ");
let sumaVueltas: number = vueltasAuto +vueltasAuto2+vueltasAuto3+vueltasAuto4;

console.log("el tiempo total de las vueltas son:", sumaVueltas);
console.log("el promeido fue de:", sumaVueltas/4);