// DOM

function cambiaColor(color){
  caja.style.background = color;
}

var caja = document.getElementById("micaja");
var caja2 = document.getElementById("micaja").innerHTML;
var caja3 = document.querySelector("#micaja");


caja.innerHTML = '¡Texto desde JS!';
caja.style.background = 'red';
caja.style.padding = '20px';
caja3.style.color = 'white';

caja.className = "Hola";


console.log(caja);

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

// var contenido = todosLosDivs[2].textContent;
var contenido = todosLosDivs[2];

contenido.innerHTML = "Otro texto";
contenido.style.background = "red";

console.log(contenido);

var seccion = document.querySelector("#miseccion");

for(let valor in todosLosDivs){
  if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    //parrafo.appendChild(texto);
    //parrafo.append(texto);
    parrafo.prepend(texto);
    //document.querySelector("#miseccion").appendChild(parrafo);
    seccion.prepend(parrafo);
  }
}

var hr = document.createElement('hr');
seccion.append(hr);


// Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');

for(let div in divsRojos){
  if(divsRojos[div].className=='rojo'){
    divsRojos[div].style.background = 'red';
  }
}

console.log(divsRojos);

var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow';


// Query Selector

var id = document.querySelector('#encabezado');
console.log(id);

var claseRojo = document.querySelector('.rojo');
//var claseRojo = document.querySelector('div.rojo');
console.log(claseRojo);

var etiqueta = document.querySelector('div'); // Selecciona un elemento, la primera aparición
console.log(etiqueta);

var etiquetasDivs = document.querySelectorAll('div'); // Selecciona todos los elementos
console.log(etiquetasDivs);