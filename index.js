var canvas;
var tablero;


var fondo = {
	fondoURL : "assets/img/fondo.png"
};

window.onload = function() {
	canvas = document.getElementById('lienzo');
	tablero = canvas.getContext('2d');

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.fondoURL;
	fondo.imagen.onload = dibujarFondo;

};

function dibujarFondo() {
	if(fondo.imagen.onload){
		tablero.drawImage(fondo.imagen,0,0);
	}
}