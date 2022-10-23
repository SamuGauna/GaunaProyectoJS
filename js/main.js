// function correr(){
//     let apellido = prompt("Por favor ingrese su apellido");
//     let nombre = prompt ("ahora ingrese su nombre");
//     let edad = prompt("cual es tu edad?");
//     let sexo = prompt("tu genero es masculino o femenino?")
//     let anosTrabajados = prompt("cuantos años de aportes tenes?")
//     let anoActual = 2022;
//     let jubilacion = 30;

//     let calculo = jubilacion - anosTrabajados;
//     let jubilo = calculo + anoActual;

//     alert("Hola " + nombre + " " + apellido);
    
//     alert("te vas a jubilar en el año " + jubilo);

    
// }
const Relapse = 10;
const Recovery = 15;
const SlimShady = 20;
const MMLP = 25;
const Kamikaze = 30;
let totalCompra;
let respuesta;
let respSeguirCompra;
let nombreUsuario = prompt("Hola! Por favor ingresa tu nombre");
alert ("Hola" + " " + nombreUsuario + " " + "a continuacion te vamos a mostrar los discos que tenemos disponibles, para las opciones no te olvides que es colocando el numero")
let discoOpcion = prompt("Que disco deseas comprar? \n 1.Relapse \n 2.Recovery \n 3.Slim Shady LP \n 4.MMMLP \n 5.Kamikaze");
if (discoOpcion == 1) {
    alert( nombreUsuario + " " + "el disco relapse cuesta" + " " + Relapse);
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


function simulador() { 
    
}