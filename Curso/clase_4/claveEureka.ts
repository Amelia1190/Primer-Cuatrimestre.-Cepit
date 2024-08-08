 /*Estructuras de Control

Eureka

• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es
la palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa*/




import * as readlineSync from "readline-sync";

    const claveReal : string = "eureka";
    let claveUsuario: string =readlineSync.question("ingrese la clave: ");
    let contador:number=3; 
    

     
while (contador<= 3  && claveReal != claveUsuario){
claveUsuario= readlineSync.question("ingrese su clave: ");

contador++;

}
claveUsuario=readlineSync.question("ingrese su clave: ");

if(claveUsuario != claveReal){
    console.log("La clave ingresada es incorrecta,siga intentando");
    
}else{
    console.log("La clave ingresada es correcta")

}