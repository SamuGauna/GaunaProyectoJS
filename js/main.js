
const Relapse = 10;
const Recovery = 15;
const SlimShady = 20;
const MMLP = 25;
const Kamikaze = 30;
let totalCompra;
let respuesta;
let encuesta;
let cantidadCD;

function CompraCD(totalCompra) {
     totalCompra = cantidadCD * Relapse;
     alert(nombreUsuario + " el total de tu compra es de " + totalCompra);
}
function CompraCD2(totalCompra) {
    totalCompra = cantidadCD * Recovery;
    alert(nombreUsuario + " el total de tu compra es de " + totalCompra);
}
function CompraCD3(totalCompra) {
    totalCompra = cantidadCD * SlimShady;
    alert(nombreUsuario + " el total de tu compra es de " + totalCompra);
}
function CompraCD4(totalCompra) {
    totalCompra = cantidadCD * MMLP;
    alert(nombreUsuario + " el total de tu compra es de " + totalCompra);
}
function CompraCD5(totalCompra) {
    totalCompra = cantidadCD * Kamikaze;
    alert(nombreUsuario + " el total de tu compra es de " + totalCompra);
}


let nombreUsuario = prompt("Hola! Por favor ingresa tu nombre");
alert ("Hola" + " " + nombreUsuario + " " + "a continuacion te vamos a mostrar los discos que tenemos disponibles, para las opciones no te olvides que es colocando el numero")
let discoOpcion = prompt("Que disco deseas comprar? \n 1.Relapse \n 2.Recovery \n 3.Slim Shady LP \n 4.MMMLP \n 5.Kamikaze");

if (discoOpcion == 1) {
    alert( nombreUsuario + " " + "el disco relapse cuesta" + " " + Relapse);
    cantidadCD = prompt("Cuantos cds necesitas comprar " + nombreUsuario);
    CompraCD(totalCompra);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta == "Y" || respuesta == "y") {
        alert("Agregado al carrito");
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion == 2) {
    alert( nombreUsuario + " " + "el disco recovery cuesta" + " " + Recovery);
    cantidadCD = prompt("Cuantos cds necesitas comprar " + nombreUsuario);
    CompraCD2(totalCompra);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta == "Y" || respuesta == "y") {
        alert("Agregado al carrito");
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion == 3) {
    alert( nombreUsuario + " " + "el disco Slim Shady LP cuesta" + " " + SlimShady);
    cantidadCD = prompt("Cuantos cds necesitas comprar " + nombreUsuario);
    CompraCD3(totalCompra);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta == "Y" || respuesta == "y") {
        alert("Agregado al carrito");
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion == 4) {
    alert( nombreUsuario + " " + "el disco MMLP cuesta" + " " + MMLP);
    cantidadCD = prompt("Cuantos cds necesitas comprar " + nombreUsuario);
    CompraCD4(totalCompra);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta == "Y" || respuesta == "y") {
        alert("Agregado al carrito");
    }
    else {
        alert("Ok :(");
    }
}
else if (discoOpcion == 5) {
    alert( nombreUsuario + " " + "el disco kamikaze cuesta" + " " + Kamikaze);
    cantidadCD = prompt("Cuantos cds necesitas comprar " + nombreUsuario);
    CompraCD5(totalCompra);
    respuesta = prompt("Confirmar la compra?Y/N");
    if (respuesta == "Y" || respuesta == "y") {
        alert("Agregado al carrito");
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





//  condicional
// if (discoOpcion <= 5) {
    
// }else {
//     alert("No seleccionaste ninguna opcion permitida");
// }



// ciclo 

// let x = 0;
// while (x < 10) {
//     console.log("Ciclo numero " + x);
//     x++;
// }
// for (let x = 0; x < 10; x++) {
//     console.log("ciclo numero " + x);
// }


