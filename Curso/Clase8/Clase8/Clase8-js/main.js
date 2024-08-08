// let nombre = document.getElementById("nombre");
// let apellido = document.getElementById("apellido");
// let btnEnviar = document.getElementById("enviar");
// let informacion = [];


// btnEnviar.addEventListener("click", (e) => {
//     e.preventDefault();
//     informacion[0] = nombre.value;
//     informacion[1] = apellido.value;

//     console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}`);
//     let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

//     saveAs(blob, "contacto.txt");
// })

//-------------------------------------------------------------------------

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btnEnviar = document.getElementById("enviar");
let informacion = [];

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); // previene la accion del form de actualizar la pagina
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;

    console.log(`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}`);

    let blob = new Blob([informacion], {type: "text/plain;charset=utf-8"}); // navegador

    //Libreria FileSaver.js
       saveAs(blob, "contact.txt");

       console.log(blob)
})

