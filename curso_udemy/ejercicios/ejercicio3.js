// Ejercicio #3

/* Hacer un programa que muestre todos los números entre dos números introducidos por el usuario */

// Solución J

var numero1 = parseInt(prompt('Introduce el primer número: '));
var numero2 = parseInt(prompt('Introduce el segundo número: '));

document.write('<h2> Del '+numero1+' a '+numero2+' están estos números: </h2>');
for(var i = numero1; i < numero2; i++){
  console.log(i);
  document.write('<p>'+i+'</p>');
}