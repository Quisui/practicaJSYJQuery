/* BROWSER OBJETC MODEL (BOM)*/
/*
OBJETOS DE ALTO NIVEL: dependen del navegador
- window (representa una ventana abierta en el navegador, si tiene <iframe> el nav crea un objeto window para el html inicial)
- screen
- navigator
- location
- history 
- document
*/

window.name = "Mi ventana";
var texto = "";
//nombre de la ventana
texto += "<br/>Nombre: "+window.name;
//tamaño de la ventana con toolbar y scrollbar
texto += "<br/>Ancho externo: "+window.outerWidth;
texto += "<br/>Alto externo: "+window.outerHeight;
//tamaño de la ventana sin toolbar sin scrollbar
texto += "<br/>Ancho interno: "+window.innerWidth;
texto += "<br/>Alto interno: "+window.innerHeight;
//scroll horizontal y vertical
texto += "<br/>Scroll horizontal: "+window.pageXOffset;
texto += "<br/>Scroll vertical: "+window.pageYOffset;
//Distancia de la esquina superior izquierda
texto += "<br/>Distancia desde la izquierda: "+window.screenX;
texto += "<br/>Distancia desde arriba: "+window.screenY;

document.getElementById('ventana').innerHTML = texto;
//alert("URL's del historial: "+ history.length);

var atras = document.getElementById('boton');
var irA = document.getElementById('ir-a');
var adelante = document.getElementById('adelante');
//metodos del objeto historii
//back: carga la url anterior en el historial
function atras(){
    history.back();
    console.log(history.back);
}

//fordward carga la url siguiente en el historial
function adelante(){
    history.forward();
    console.log(history.forward);
}


//go(numero|url) va a una pagina concreta del historial + adelante -hacia atras

function ir(){
    var numero = prompt("Indica un num para moverte en el historial");
    history.go(numero);
}

boton.addEventListener('onClick', atras);
irA.addEventListener('onclick', ir);
adelante.addEventListener('onclick', adelante);
/* Propiedasdes de los iframes
- frames 
*/

