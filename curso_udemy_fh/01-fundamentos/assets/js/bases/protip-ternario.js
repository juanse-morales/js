const elMayor = (a,b)=>a>b?a:b,
tieneMembresia = (miembro)=>miembro?'2 Dólares':'10 Dólares';

console.log(elMayor(12,8));
console.log(tieneMembresia(true));

const amigo = false,
amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo?'Thor':'Loki',
  (()=>'Nick Fury')(),
  elMayor(12,8)
];

console.log(amigosArr);

const nota = 100,
grado = nota >= 95 ? 'A+' :
        nota >= 90 ? 'A'  :
        nota >= 85 ? 'B+' :
        nota >= 80 ? 'B'  :
        nota >= 75 ? 'C+' :
        nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});
