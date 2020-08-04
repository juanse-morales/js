// Ejercicio #4

/* Hacer un programa que muestre todos los números impares entre dos números introducidos por el usuario */

// Solución J

var numero = parseInt(prompt('Introduce el número: '));

for(var i = 1; i <= numero; i++){
  if(numero%i == 0){
    console.log(i);
  }
}