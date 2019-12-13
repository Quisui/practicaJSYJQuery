/*
OBJETOS NAVIVOS: no dependen del navegador
- string
- number
- boolean
- data
- math
- RegExp (expresiones regulares)
- array
- function
- object

OBJETOS DE ALTO NIVEL: dependen del navegador
- window
- screen
- navigator
- location
- history 
- document
*/
//array
var nombre = "Carlos Alvarado"
var altura = 190;

function MuestraMiNombre(nombre, altura) {
    var mis_datos = `
    <h1> Caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>
    <h3> Mido: ${altura} </h3>
    `;
    return mis_datos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("QuisuiTest", 190)
}

function arrayRecorrer(nombre) {
    var array = [];
    for (var i = 0; i <= 4; i++) {
        array[i] = nombre;
    }
    array.forEach((nombre) => {
        document.write(nombre, '<br>')
    });

}

function impresion() {
    var datos = document.getElementById("datos");
    datos.innerHTML = arrayRecorrer("Quisui");
}
impresion();

/*
    var texto = "Carlos Arturo";
    var texto2 = texto.indexOf("o");
    var nuevoTexto = texto.lastIndexOf("o");
    var nuevoTexto = texto.replace(texto, "FalconMasters");
    o tambien puede ser
    var nuevoTexto = texto.replace("Carlos", "FalconMasters")

*/