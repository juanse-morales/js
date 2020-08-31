const regresaTrue = () => {
  console.log('Regresa True');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa False');
  return false;
}

console.warn('Not o la negación');
console.log( true );
console.log( !true );
console.log( !false );
console.log( !regresaFalse() );

console.warn('And');
console.log(true && true);
console.log(true && !false);

console.log('======================');;
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log('======================');;
regresaFalse() && regresaTrue();

console.warn('OR');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined,
soyNull = null,
soyFalso = false,

a1 = true && 'Hola Mundo' && 150, // JS le asigna el último valor a la constante
a2 = false && 'Hola Mundo' && 150, // JS le asigna el primer valor a la constante
a3 = 'Hola' && 'Mundo' && soyFalso && true,
a4 = soyFalso || 'Ya no soy falso',
a5 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
a6 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
console.log({a1, a2, a3, a4, a5, a6});