let a = 10,
b = a;

a = 30;
console.log({a,b});

let juan = {nombre: 'Juan'},
ana = {...juan}; // Los tres puntos significa que separa los elementos y hace una copia exacta del valor no de la referencia. Rompe la relación por referencia.
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = ({...persona})=>{ // Los tres puntos rompe le relación por referencia.
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'},
tony = cambiaNombre(peter);

console.log({peter, tony});

const frutas = ['Manzana', 'Pera', 'Piña'],
otrasFrutas = [...frutas],
otrasFrutas2 = frutas.slice(); // Otra forma de romper la relación


otrasFrutas.push('Mango');
otrasFrutas2.push('Melón');
console.table({frutas, otrasFrutas, otrasFrutas2});

// Midiendo el tiempo
console.time('slice');
const otrasFrutas3 = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas4 = [...frutas];
console.timeEnd('spread');