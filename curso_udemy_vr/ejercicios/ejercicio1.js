// Ejercicio 1

/* Programa que pide dos números y que nos diga cual es el mayor, el menor y si son iguales */

/* 
// Solución

var numero1 = parseInt(prompt('Introduce el primer numero: ',0));
var numero2 = parseInt(prompt('Introduce el segundo numero: ',0));

if(numero1 == numero2){
  alert('Los números son iguales');
}else if(numero1 > numero2){
  alert('El número mayor es: '+numero1+'. El número menor es: '+numero2);
}else if(numero1 < numero2){
  alert('El número mayor es: '+numero2+'. El número menor es: '+numero1);
}else{
  alert('Introduce números correctos');
}

*/

// Plus: Si los números no son un número o son menores o iguales a cero, nos lo vuelva a pedir.

// Solución
/*
var bandera;

do{
  var numero1 = parseInt(prompt('Introduce el primer numero: ',0));
  var numero2 = parseInt(prompt('Introduce el segundo numero: ',0));
  bandera = false;

  if(numero1 == numero2){
    alert('Los números son iguales');
  }else if(numero1 > numero2){
    alert('El número mayor es: '+numero1+'. El número menor es: '+numero2);
  }else if(numero1 < numero2){
    alert('El número mayor es: '+numero2+'. El número menor es: '+numero1);
  }else{
    alert('Introduce números correctos');
    bandera=true;
  }
}while(bandera);
*/
// Otra forma

var numero1 = parseInt(prompt('Introduce el primer numero: ',0));
var numero2 = parseInt(prompt('Introduce el segundo numero: ',0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt('Introduce el primer numero: ',0));
  numero2 = parseInt(prompt('Introduce el segundo numero: ',0));  
}

if(numero1 == numero2){
  alert('Los números son iguales');
}else if(numero1 > numero2){
  alert('El número mayor es: '+numero1+'. El número menor es: '+numero2);
}else if(numero1 < numero2){
  alert('El número mayor es: '+numero2+'. El número menor es: '+numero1);
}else{
  alert('Introduce números correctos');
}