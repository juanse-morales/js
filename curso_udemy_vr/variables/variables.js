// Variable: es un contenedor de información

var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
var pais_continente = pais+' '+continente;

pais = 'Mexico';
continente = 'Latinoamerica';

console.log(pais, continente, antiguedad);
console.log(pais_continente);

// Let: permite definir variable limitando su alcance de acuerdo al bloque donde se está usando

var numero = 40;
console.log(numero);

if(true){
  var numero = 50;
  console.log(numero);
}

console.log(numero);

var texto = "Curso JS";
console.log(texto);

if(true){
  let texto = "Curso Laravel";
  console.log(texto);
}

console.log(texto);

// Práctica J

var n = 30;
console.log(n);

if(true){
  n = 35;
  console.log(n);
  let m = 42;
  console.log(m);
}

console.log(n);
console.log(m);