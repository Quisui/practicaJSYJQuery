// /* DOCUMENT OBJECT MODEL */
// var parrafo = document.getElementsByClassName("lead");
// console.log(parrafo);
// var boton = document.getElementById("boton");
// var estado = true;
// var estado_size = true;
// var eventos = ["mouseover", "mouseout", "onclick"];
// var nombre = "Carlos";
// var altura = 190;

// function muestra_nombre(nombre) {
//     var mis_datos = `
//         <h1>Mi nombre es: ${nombre}</h1>
//     `;
//     return mis_datos;
// }

// function muestra_altura(altura) {
//     var mis_datos = `
//     <h2>Mido: ${altura}</h2>
//     `;
//     return mis_datos;
// }

// function imprimir() {
//     var datos = document.querySelectorAll('p');
//     datos[0].innerHTML = muestra_nombre(nombre);
//     datos[1].innerHTML = muestra_altura(altura);
// }
// /*var parrafo = document.querySelectorAll('p');
// var boton = document.getElementById('boton');*/
// //console.log(parrafo[0]);
// function cambiarColor() {
//     if (estado == true) {
//         parrafo[0].style.color = "blue";
//         parrafo[1].style.color = "red";
//         estado = false;
//     } else {
//         parrafo[0].style.color = "black";
//         parrafo[1].style.color = "black";
//         estado = true;
//     }
// }
// function size() {
//     if (estado == false) {
//         atras();
//         parrafo[0].style.textAlign = "center";
//         parrafo[1].style.textAlign = "center";
//         estado_size = true;
//     } else {
//         parrafo[0].style.textAlign = "left";
//         parrafo[1].style.textAlign = "left";
//         estado_size = false;
//     }
// }
// boton.addEventListener(eventos[0], cambiarColor);
// boton.addEventListener(eventos[1], size);
// imprimir();

var parrafo = $(".lead");
var boton = $("#boton");
var estado = true;
var estado_size = true;
var eventos = ["mouseover", "mouseout", "onclick"];
var nombre = "carlos";
var altura = 175;

function muestra_nombre(nombre) {
    var mis_datos = `
    <h1>Mi nombre es: ${nombre}</h1>
    `;
    return mis_datos;
}

function muestra_altura(altura) {
    var mis_datos = `
    <h2>Mido: ${altura}</h2>
    `;
    return mis_datos;
}

function imprimir() {
    var datos = document.querySelectorAll('p');
    datos[0].innerHTML = muestra_nombre(nombre);
    datos[1].innerHTML = muestra_altura(altura);
}

function cambiarColor() {
    if (estado == true) {
        parrafo[0].style.color = "blue";
        parrafo[1].style.color = "red";
        estado = false;
    } else {
        parrafo[0].style.color = "black";
        parrafo[1].style.color = "black";
        estado = true;
    }
}

function size() {
    if (estado == false) {
        parrafo[0].style.textAlign = "center";
        parrafo[1].style.textAlign = "center";
        estado_size = true;
    } else {
        parrafo[0].style.textAlign = "left";
        parrafo[1].style.textAlign = "left";
        estado_size = false;
    }
}

$(boton).mouseover(cambiarColor);
$(boton).mouseout(size);