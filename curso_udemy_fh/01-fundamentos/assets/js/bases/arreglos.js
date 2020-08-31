const arr = new Array(10); // Es una forma de declarar un arreglo pero no es muy común verlo.
// console.log(arr);

const arr2 = []; // Otra forma de declarar un arreglo, este arreglo es vacío.
// console.log(arr2);

let videoJuegos = ['Mario 3','Megaman','Chrono Trigger'];
// console.log({videoJuegos});
// console.log(videoJuegos[0]);

let arreglosCosas = [
  true,
  123,
  'Juan',
  1 + 2,
  function(){},
  ()=>{},
  {a:1},
  ['X','Megaman','Zero','Dr. Light',[
    'Dr. Willy',
    'Woodman'
  ]]
];

// console.log({arreglosCosas});
console.log(arreglosCosas[7][4][1]);