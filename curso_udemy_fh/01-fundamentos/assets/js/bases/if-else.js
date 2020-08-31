let a = 5;

if(a>=10){ // Además de un boolean, recibe un null, undefined, una asignación.
  console.log('A es mayor o igual a 10');
}else{
  console.log('A es menor a 10');
}

const hoy = new Date();
console.log(hoy);

let dia = hoy.getDay();
console.log({dia});

if(dia === 0){
  console.log('Domingo');
}else{
  console.log('No es domingo');
}

const diaLetras = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Master',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Domingo'
};

// Otra forma

const diaLetras3 = {
  0: ()=>'Domingo',
  1: ()=>'Lunes',
  2: ()=>'Master',
  3: ()=>'Miércoles',
  4: ()=>'Jueves',
  5: ()=>'Viernes',
  6: ()=>'Domingo'
}

const diaLetras2 = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const dia2 = 10;
console.log(diaLetras3[dia2]() || 'Día no definidio');