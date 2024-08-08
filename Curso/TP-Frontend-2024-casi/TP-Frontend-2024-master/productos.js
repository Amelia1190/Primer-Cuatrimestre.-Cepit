/*let arrProductos= ["Fideos Matarazzo", "Azúcar Chango", "Yerba Mate", "Vino", "Pure De Tomate",
    "Oreo", "Leche", "Aceite", "Arroz", "Café", "Lavandina", "Cacao"];
let arrPrecio=   [1400, 1390, 4865, 4950, 700, 3850, 1230, 1850, 1150, 6650, 1150, 1390];
let arrCant=      [100, 50, 75, 60, 90, 100, 80, 70, 50, 40, 100, 120];

document.querySelector("div button").addEventListener("click", ()=>{
    let cantidad=document.querySelector("div input").value;
    cantidad=Number(cantidad);
    if(cantidad>0&&(arrCant[0]-cantidad)>0){
        comprar(cantidad);
    }else{
        alert(" Por favor, ingrese una cantidad mayor a cero o no hay stock")
    }
})

function comprar(cantidad) {
    document.getElementById("total").innerText=cantidad*arrPrecio[0];
}*/
// Datos de ejemplo para productos y stock
const productos = [
    { nombre: "Fideos Matarazzo Tirabuzón N28 X500g", precio: 1400, imagen: "./img/FIDEOS.webp" },
    { nombre: "Azúcar Chango Tradicional 1kg.", precio: 1390, imagen: "./img/AZUCAR.webp" },
    { nombre: "Yerba Mate Playadito Suave 1 Kg", precio: 4865, imagen: "./img/yerba.webp" },
    { nombre: "Vino Cordero Con Piel De Lobo Malbec", precio: 4950, imagen: "./img/VINO.webp" },
    { nombre: "Pure De Tomate La Campagnola 530g.", precio: 700, imagen: "./img/PURE DE TOMATES.webp" },
    { nombre: "Galletitas Oreo Rellenas con Crema Sabor Original 354 Gr", precio: 3850, imagen: "./img/OREO.webp" },
    { nombre: "Leche La Serenisima Entera Bot 1l", precio: 1230, imagen: "./img/LECHE.webp" },
    { nombre: "Aceite De Girasol Cocinero 1.5 L", precio: 1850, imagen: "./img/ACEITE.webp" },
    { nombre: "Arroz Preparado Gallo Vegetales Selx240g", precio: 1150, imagen: "./img/ARROZ-GALLO.webp" },
    { nombre: "Café Dolca Original Nescafe® 170 Gr.", precio: 6650, imagen: "./img/CAFE.webp" },
    { nombre: "Lavandina Ayudín Clásica 1 L", precio: 1150, imagen: "./img/LAVANDINA.webp" },
    { nombre: "Cacao En Polvo Nesquik S/tacc 150gr", precio: 1390, imagen: "./img/CACAO.webp" }
  ];
  
  const stock = [
    { producto: "Fideos Matarazzo Tirabuzón N28 X500g", cantidad: 5 },
    { producto: "Azúcar Chango Tradicional 1kg.", cantidad: 10 },
    { producto: "Yerba Mate Playadito Suave 1 Kg", cantidad: 8 },
    { producto: "Vino Cordero Con Piel De Lobo Malbec", cantidad: 3 },
    { producto: "Pure De Tomate La Campagnola 530g.", cantidad: 7 },
    { producto: "Galletitas Oreo Rellenas con Crema Sabor Original 354 Gr", cantidad: 6 },
    { producto: "Leche La Serenisima Entera Bot 1l", cantidad: 10 },
    { producto: "Aceite De Girasol Cocinero 1.5 L", cantidad: 4 },
    { producto: "Arroz Preparado Gallo Vegetales Selx240g", cantidad: 12 },
    { producto: "Café Dolca Original Nescafe® 170 Gr.", cantidad: 2 },
    { producto: "Lavandina Ayudín Clásica 1 L", cantidad: 15 },
    { producto: "Cacao En Polvo Nesquik S/tacc 150gr", cantidad: 9 }
  ];
  
  // Función para cargar los productos en el contenedor
  function cargarProductos() {
    const contenedor = document.getElementById("productos-container");
  
    productos.forEach(producto => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <figure>
          <img src="${producto.imagen}" alt="${producto.nombre}">
        </figure>
        <div class="info-producto">
          <h2>${producto.nombre}</h2>
          <p class="precio">$${producto.precio}</p>
        </div>
        <div class="button">
          <input type="number" min="0" max="${getStock(producto.nombre)}" value="0" data-nombre="${producto.nombre}" />
          <button type="button" onclick="comprar('${producto.nombre}')">Comprar</button>
        </div>
      `;
      contenedor.appendChild(div);
    });
  }
  
  // Función para obtener el stock disponible de un producto
  function getStock(nombre) {
    const item = stock.find(producto => producto.producto === nombre);
    return item ? item.cantidad : 0;
  }
  
  // Función para validar la compra
  function comprar(nombre) {
    const input = document.querySelector(`input[data-nombre="${nombre}"]`);
    const cantidad = parseInt(input.value);
    const producto = productos.find(p => p.nombre === nombre);
    const stockDisponible = getStock(nombre);
  
    if (cantidad > stockDisponible) {
      alert(`No hay suficiente stock para el producto "${nombre}". Disponible: ${stockDisponible}`);
      return;
    }
  
    // Actualizar el total
    const totalElement = document.getElementById("total");
    const totalActual = parseFloat(totalElement.textContent);
    const nuevoTotal = totalActual + (cantidad * producto.precio);
    totalElement.textContent = nuevoTotal.toFixed(2);
    
    // Actualizar el stock
    const stockItem = stock.find(p => p.producto === nombre);
    if (stockItem) {
      stockItem.cantidad -= cantidad;
    }
  
    alert(`Has comprado ${cantidad} de "${nombre}". Total: $${(cantidad * producto.precio).toFixed(2)}`);
    input.value = 0; // Resetear el campo de cantidad
  }
  
  // Cargar productos al inicio
  document.addEventListener("DOMContentLoaded", cargarProductos);
  












