// Ejercicio #2

/* Utilizando un bucle, mostrar la suma y la media de los números introducidos por el usuario, hasta introducir un número negativo
y ahí mostrar el resultado */

/*

// Solución

var suma = 0, contador = 1, promedio = 0;
var numero;

do{
  numero = parseInt(prompt('La suma es: '+suma+'\nEl promedio es: '+promedio+'\nIntroduce el número: ', 0));
    
  suma += numero;
  promedio = suma/contador;
  contador++;
}while(numero>0);

*/

// Otra forma

var suma = 0;
var contador = 0;

do{
  var numero = parseInt(prompt('Introduce el número: '));
  if(isNaN(numero)){
    numero = 0;
  }else if(numero>=0){
    suma += numero;
    contador++;
  }
}while(numero>=0);

alert('La suma de todos los números es: '+ suma);
alert('La media de todos los números es: '+ (suma/contador));