
let respuesta;
let encuesta;
let cantidadCD;

let carrito = [];

const discoFiltro = [
    { nombre: "Kamikaze", precio: 100},
    { nombre: "Relapse", precio: 150},
    { nombre: "Recovery", precio: 200},
    { nombre: "Slim Shady", precio: 250},
    { nombre: "MMLP", precio: 300},
];

//constructor, Objetos a partir de una funcion

function Discos(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const discoK = new Discos("Kamikaze", 100);
const discoR = new Discos("Relapse", 150);
const discoReco = new Discos("Recovery", 200);
const discoS = new Discos("Slim Shady", 250);
const discoM = new Discos("MMLP", 300);

//funcion total de compra

function compra(cd) {
    totalCompra = cantidadCD * cd;
    alert(nombreUsuario + " el total de tu compra es de " + totalCompra);
}

//Codigo

let nombreUsuario = prompt("Hola! Por favor ingresa tu nombre");
let respFiltro = prompt(nombreUsuario + " deseas buscar algun disco en particular?Y/N");
if (respFiltro === "Y" || respFiltro === "y") {
    let discoBuscado = prompt("Coloca el nombre del disco que deseas buscar, no te olvides revisar la consola");
    console.log( discoFiltro.find( (discoFiltro) => discoFiltro.nombre == discoBuscado ) ); 
}
alert ("Hola" + " " + nombreUsuario + " " + "a continuacion te vamos a mostrar los discos que tenemos disponibles, para las opciones no te olvides que es colocando el numero")
let discoOpcion = parseInt(prompt("Que disco deseas comprar? \n 1.Relapse \n 2.Recovery \n 3.Slim Shady LP \n 4.MMMLP \n 5.Kamikaze"));

if (discoOpcion === 1) {
    alert( nombreUsuario + " el disco relapse cuesta " + discoR.precio);
    cantidadCD = parseInt(prompt("Cuantos cds necesitas comprar " + nombreUsuario + "?"));
    compra(discoR.precio);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta === "Y" || respuesta === "y") {
        alert("Agregado al carrito, tu carrito se vera reflejado en console :)");
        carrito.push(discoR.nombre, cantidadCD);
        console.log(carrito);
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion === 2) {
    alert( nombreUsuario + " " + "el disco recovery cuesta" + " " + discoReco.precio);
    cantidadCD = parseInt(prompt("Cuantos cds necesitas comprar " + nombreUsuario));
    compra(discoReco.precio);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta == "Y" || respuesta == "y") {
        alert("Agregado al carrito, tu carrito se vera reflejado en console :)");
        carrito.push(discoReco.nombre, cantidadCD);
        console.log(carrito);
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion === 3) {
    alert( nombreUsuario + " " + "el disco Slim Shady LP cuesta" + " " + discoS.precio);
    cantidadCD = parseInt(prompt("Cuantos cds necesitas comprar " + nombreUsuario));
    compra(discoS.precio);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta === "Y" || respuesta === "y") {
        alert("Agregado al carrito, tu carrito se vera reflejado en console :)");
        carrito.push(discoS.nombre, cantidadCD);
        console.log(carrito);
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion === 4) {
    alert( nombreUsuario + " " + "el disco MMLP cuesta" + " " + discoM.precio);
    cantidadCD = prompt("Cuantos cds necesitas comprar " + nombreUsuario);
    compra(discoM.precio);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta === "Y" || respuesta === "y") {
        alert("Agregado al carrito, tu carrito se vera reflejado en console :)");
        carrito.push(discoM.nombre, cantidadCD);
        console.log(carrito);
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion === 5) {
    alert( nombreUsuario + " " + "el disco kamikaze cuesta" + " " + discoK.precio);
    cantidadCD = parseInt(prompt("Cuantos cds necesitas comprar " + nombreUsuario));
    compra(discoK.precio);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta === "Y" || respuesta === "y") {
        alert("Agregado al carrito, tu carrito se vera reflejado en console :)");
        carrito.push(discoK.nombre, cantidadCD);
        console.log(carrito);
    }
    else {
        alert("Ok :(");
    }
}
else {
    alert("No seleccionaste ninguna de las opciones correctas");
}
encuesta = prompt("Del 1 al 5, Como calificarias nuestra atencion?");
for (encuesta; encuesta >=1 && encuesta <=5; encuesta++) {
    console.log("Gracias por evaluarnos");
}

