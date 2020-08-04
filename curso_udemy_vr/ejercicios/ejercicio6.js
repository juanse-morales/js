// Ejercicio #6

/* Que nos diga si un número es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el número */

var numero = parseInt(prompt('Introduce el número: '));

while(isNaN(numero)){
  numero = parseInt(prompt('Introduce el número: '));
}

if(numero%2==0){
  alert('Es número par');
}else{
  alert('Es número impar');
}