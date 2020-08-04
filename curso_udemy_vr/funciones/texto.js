// Funciones de texto

// Transformación de texto

var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript curso de Victor Robles ";
var texto2 = "es muy bueno el curso";

var dato1 = numero.toString(); // Método que convierte cualquier variable a String
var dato2 = texto1.toUpperCase(); // Método que transforma el texto a Mayúscula
var dato3 = texto1.toLowerCase(); // Método que transforma el texto a Minúscula

console.log(dato1);


// Calcular longitud

var nombre = "Andrea Rodriguez";
var array = ['Hola','Mundo'];

console.log(nombre.length);
console.log(array.length);


// Concatenar: unir textos

var textoTotal = texto1.concat(texto2);
console.log(textoTotal)

// Búsqueda

var busqueda1 = texto1.indexOf("curso"); // primera aparición de la palabra
var busqueda2 = texto1.lastIndexOf("curso"); // última aparición de la palabra
var busqueda3 = texto1.search("curso"); // primera aparición de la palabra
var busqueda4 = texto1.match("curso"); // devuelve un array de la primera aparición
var busqueda5 = texto1.match(/curso/g); // devuelve un array con todas las apariciones
var busqueda6 = texto1.substr(14,5); // Extrae la palabra desde el caracter 14, hasta 5 caracteres después
var busqueda7 = texto1.charAt(44); // Extrae una letra en el índice que le coloquemos
var busqueda8 = texto1.startsWith("Bien"); // Busca un texto al principio y si lo encuentra devuelve un boolean
var busqueda9 = texto1.endsWith("Victor Robles "); // Busca un texto al final y si lo encuentra devuelve un boolean
var busqueda10 = texto1.includes("JavaScript"); // Busca una palabra y si la encuentra devuelve un boolean

console.log(busqueda10);


// Reemplazo

var busqueda11 = texto1.replace("JavaScript","Symfony"); // Reemplaza una palabra por otra
var busqueda12 = texto1.slice(14); // Toma la frase a partir del índice colocado y corta la frase anterior
var busqueda13 = texto1.slice(14, 22); // Toma la frase a partir del índice colocado y corta la frase anterior
var busqueda14 = texto1.split(" "); // Separa en un array partiendo del caracter colocado
var busqueda15 = texto1.trim(); // Elimina los espacios al principio y al final

console.log(busqueda15);


// Plantillas de texto

var nombre = prompt('Ingresa tu nombre: ');
var apellido = prompt('INgresa tu apellido: ');

var texto = `
  <h2>Hola, bienvenido</h2>
  <h3>Mi nombre es: ${nombre} </h3>
  <h3>Mi apellido es: ${apellido} </h3>
`;

document.write(texto);