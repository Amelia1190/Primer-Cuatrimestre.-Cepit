"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var vueltasAuto = readlineSync.questionInt(" tiempo de la primera vuelta: ");
var vueltasAuto2 = readlineSync.questionInt(" tiempo de la segunda vuelta: ");
var vueltasAuto3 = readlineSync.questionInt(" tiempo de la primera vuelta: ");
var vueltasAuto4 = readlineSync.questionInt(" tiempo de la primera vuelta: ");
var sumaVueltas = vueltasAuto + vueltasAuto2 + vueltasAuto3 + vueltasAuto4;
console.log("el tiempo total de las vueltas son:", sumaVueltas);
