

let carrito = [];

const discoFiltro = [
    { nombre: "Kamikaze", precio: 100},
    { nombre: "Relapse", precio: 150},
    { nombre: "Recovery", precio: 200},
    { nombre: "Slim Shady", precio: 250},
    { nombre: "MMLP", precio: 300},
];
const discosArreglo = [
  {
    id: "disco1",
    nombre: "eminem show",
    precio: 100
  },
  {
    id: "disco2",
    nombre: "kamikaze",
    precio: 150
  },
  {
    id: "disco3",
    nombre: "mmlp",
    precio: 200
  },
  {
    id: "disco4",
    nombre: "slim shady",
    precio: 250
  },
  {
    id: "disco5",
    nombre: "mmlp 2",
    precio: 300
  },
  {
    id: "disco6",
    nombre: "relapse",
    precio: 350
  },
];


let botonesAgregar = document.querySelectorAll(".disco-agregar");

function actualizandoBotones() {
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}
actualizandoBotones();
function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const discoAgregado = discosArreglo.find(disco => disco.id === idBoton);
  
  if(carrito.some(disco => disco.id === idBoton)) {
    const index = carrito.findIndex(disco => disco.id === idBoton);
    carrito[index].cantidad++;
  }
  else {
    discoAgregado.cantidad = 1;
    carrito.push(discoAgregado);
  }
  resumenCompra();
  function resumenCompra(){
  
    const tabla = document.getElementById('tabla')
    const creacionTabla = document.createElement('table')
    creacionTabla.innerHTML = `<table class="table ">
    <thead>
      <tr>
        <th scope="col"> Cantidad </th>
        <th scope="col"> Nombre del Disco </th>
        <th scope="col"> Precio </th>       
        <th scope="col"> Total </th>       
      </tr>
    </thead>
    <tbody id="creandoFila" class="table-group-divider">
      <tr>
        <th scope="row">${discoAgregado.cantidad}</th>
        <td>${discoAgregado.nombre}</td>
        <td>${discoAgregado.precio}</td>
        <td>total</td>
      </tr>      
    </tbody>
    </table>`
    tabla.appendChild(creacionTabla)
  
  
    const divBotones = document.getElementById('botones')
    const crearBotones = document.createElement('div')
    crearBotones.innerHTML = `<button id="confirmarCompra">Confirmar Compra</button>`
    divBotones.appendChild(crearBotones)
  
    const confirmandoCompra = document.getElementById("confirmarCompra");
    console.log(carrito);
  }
  localStorage.setItem("discos-en-carrito", JSON.stringify(carrito));
}


function creandoFilas() {    
  let fila1 = document.createElement('tr')
  fila1.innerHTML = `<td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>`
  let fila = document.getElementById("creandoFila");
  idBoton.onclick = () => {
  fila.appendChild(fila1)
  }
}




