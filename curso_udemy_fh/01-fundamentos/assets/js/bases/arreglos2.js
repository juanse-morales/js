let juegos = ['Zelda','Mario','Metroid','Chrono'];
// console.log('Largo: ',juegos.length);

let primero = juegos[2-2]; // Se pueden hacer operaciones dentro de los corchetes.
let ultimo = juegos[juegos.length-1]; // Propiedad LENGTH: devuelve la longitud del array.

// console.log({primero,ultimo});

juegos.forEach((elemento,indice,arr)=>{ // Método FOREACH: sirve para recorrer el array y ejecutar una instrucción por cada elemento.
  console.log({elemento,indice,arr});
});

let nuevaLongitud = juegos.push('F-Zero'); // Método PUSH: añade un elemento al final del array.
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem'); // Método UNSHIFT: añade un elemento al principio del array.
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop(); // Método POP: elimina el último elemento del array.
console.log({juegoBorrado, juegos});

const pos = 1;
let juegosBorrados = juegos.splice(pos,2); // Método SPLICE: elimina varios elementos de un array a partir de una posición.
console.log({juegoBorrado, juegos});

let metroidIndex = juegos.indexOf('Metroid'); // Método INDEXOF: devuelve la posición de un elemento - Casesensitive
console.log({metroidIndex});