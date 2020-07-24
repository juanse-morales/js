// Arrays

var nombres = ['Victor Robles','Juan Lopez','Manolo García','Jose Martin',52,true];

var lenguajes = new Array('PHP','JS','Go','Java');

console.log(nombres[5]);
console.log(nombres.length); // Longitud del array


// Recorrer el array

document.write("<h2>Lenguajes de programación del 2018</h2>");
document.write("<ul>");

lenguajes.forEach(elemento=>document.write("<li>"+elemento+"</li>"));

document.write("</ul>");

for(let lenguaje in lenguajes){
  console.log(lenguajes[lenguaje]);
}


// Array multidimensional

var categorias = ['Acción','Terror','Comedia'];
var peliculas = ['La verdad duele','La vida es bella','Gran Torino'];

var cine = [categorias,peliculas];

console.log(cine[0][1]);


// Operaciones con array

peliculas.push("Batman"); // Añade un elemento al final del array
console.log(peliculas);

peliculas.pop(); // Elimina el último elemento del array
console.log(peliculas);

var texto = peliculas.join();
console.log(texto);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

peliculas.sort(); // Ordena el array en orden alfabetico
console.log(peliculas);

peliculas.reverse();
console.log(peliculas);


// Busqueda en array

var busqueda = lenguajes.find(lenguaje => lenguaje = "PHP");
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje = "PHP");

var precios = [10, 20, 50, 80, 12];
var busqueda3 = precios.some(precio => precio >= 20);

console.log(busqueda3);