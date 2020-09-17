import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId = 'capi1',
heroeId2 = 'spider';


/*buscarHeroe(heroeId, (err,heroe)=>{
  if(err){
    console.error(err);
  }else{
    console.log(heroe);
  }
});*/

/*buscarHeroe(heroeId).then(heroe => {
  console.log(`Enviando a ${heroe.nombre} a la misión`);
});*/

/*Promise.all([true, 'Hola', 123]).then(arr=>{
  console.log('promise.all', arr);
});*/

Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)]).then(([heroe1, heroe2])=>{
  //console.log('promise.all', heroes);
  console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
}).catch(err=>{
  alert(err);
}).finally(()=>{
  console.log('Finally');
});

console.log('Fin de programa');