let arrProductos=["lapices", "hojas"]
let arrPrecio=   [500,         800]
let arrCant=      [100,         50]

document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad=document.querySelector("div input").value;
    cantidad=Number(cantidad);
    if(cantidad>0&&(arrCant[0]-cantidad)>0){
        comprar(cantidad);
    }else{
        alert("ingrese una cantidad mayor a cero o no hay stock")
    }
})

function comprar(cantidad) {
    document.getElementById("total").innerText=cantidad*arrPrecio[0];
}
