import { buscarHeroeAsync, buscarHeroe } from './promesas';

const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);

/*export const obtenerHeroesArr = async() => {
  const heroesArr = [];

  for(const id of heroesIds){
    heroesArr.push(buscarHeroe(id));
  }

  return await Promise.all(heroesArr);
}*/

export const obtenerHeroesArr = async() => await Promise.all(heroesIds.map(buscarHeroe));

export const obtenerHereoAwait = async(id) => {
  try{
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  }catch(err){
    console.log('CATCH!!!');
    return {
      nombre: 'Sin nombre',
      poder: 'Sin poder'
    };
  }
}

export const heroesCiclo = async () => {
  console.time('HeroesCiclo');

  for await(const heroe of heroesPromesas){
    console.log(heroe);
  }

  console.timeEnd('HeroesCiclo');

  /*const heroes = await Promise.all(heroesPromesas);
  console.log(heroes);*/
}

export const heroeIfAwait = async (id) => {
  if((await buscarHeroeAsync(id)).nombre === 'Ironman'){
    console.log('Es el mejor de todos');
  }else{
    console.log('Naaaaa');
  }
}