function saludar(nombre){
  console.log(arguments);
  console.log('Hola '+nombre);
}

const saludar2 = function(nombre){
  console.log('Hola '+nombre);
}

const saludarFlecha = () => {
  console.log('Hola flecha');
}

const saludarFlecha2 = nombre => {
  console.log('Hola '+nombre);
}

saludar('Fernando', 40, true, 'Costa Rica');
saludarFlecha();
saludarFlecha2('Melissa');


const sumar = (a,b) => a + b;

console.log(sumar(2,2));

function getAleatorio(){
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());