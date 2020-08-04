// Ejercicio Array

/* 
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola
3. Ordenar el array y mostrarlo
4. Invertir el array y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

// Solución J
/*
var numeros = [];

for(var i = 1; i<=6; i++){
  numeros.push(parseInt(prompt('Ingrese un número')));
}

function mostrar(array){
  document.write("<h2>Array</h2>");
  console.log('Array');
  array.forEach(elemento => {
    document.write("<p>"+elemento+"</p>");
    console.log(elemento);
  });
}

mostrar(numeros);
numeros.sort();
mostrar(numeros);
numeros.reverse();
mostrar(numeros);

document.write('Número de elementos del array: '+numeros.length);

var numero = parseInt(prompt('Introduce el número a buscar: '));
var busqueda = numeros.indexOf(numero);

if(busqueda!=-1){
  alert("El número se encuentra en el array y su índice es: "+busqueda);
}else{
  alert('El número no se encuentra en el array');
}
*/

// Otra forma

function mostrarArray(elementos, textoCustom=""){
  document.write("<h2>Contenido del array "+textoCustom+"</h2>");
  document.write("<ul>");
  elementos.forEach((elemento,index)=>{
    document.write("<li>"+elemento+"</li>");
  });
  document.write("</ul>");
}

var numeros2 = new Array(6);

for(var i = 0; i<=5; i++){
  numeros2[i] = parseInt(prompt('Ingrese un número'));
}

mostrarArray(numeros2);
console.log(numeros2);

numeros2.sort((a,b)=> {return a-b});
mostrarArray(numeros2,"ordenado");

numeros2.reverse();
mostrarArray(numeros2,"revertido");

document.write("<h3>El array tiene: "+numeros2.length+" elementos </h3>");

var busqueda = parseInt(prompt("Busca un número: "));
var posicion = numeros2.findIndex(numero => numero == busqueda);

if(posicion != -1){
  document.write("<h4>Encontrado</h4>");
  document.write("<p>Posición de la busqueda: "+posicion+"</p>");
}else{
  document.write("<h4>NO encontrado</h4>");
}