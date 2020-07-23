// Funciones de texto

// Transformación de texto

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles ";
var texto2 = "es muy bueno el curso";

var dato1 = numero.toString(); // Método que convierte cualquier variable a String
var dato2 = texto1.toUpperCase(); // Método que transforma el texto a Mayúscula
var dato3 = texto1.toLowerCase(); // Método que transforma el texto a Minúscula

console.log(dato1);
console.log(dato2);
console.log(dato3);


// Calcular longitud

var nombre = "Andrea Rodriguez";
var array = ['Hola','Mundo'];

console.log(nombre.length);
console.log(array.length);


// Concatenar: unir textos

var textoTotal = texto1.concat(texto2);
console.log(textoTotal)