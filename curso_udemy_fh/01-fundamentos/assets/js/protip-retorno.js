function crearPersona(nombre, apellidos){
  return { nombre, apellidos }
}

const crearPersona2 = (nombre, apellidos) => ({nombre, apellidos});

const persona = crearPersona2('Milena', 'Perez');
//console.log(persona);

function imprimeArgumentos(){
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => console.log({edad,args});

// imprimeArgumentos2(10, true, false, 'Sara', 'Hola');

const imprimeArgumentos3 = (edad, ...args) => {
  return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos3(10, true, false, 'Sara', 'Hola');
//console.log({casado, vivo, nombre, saludo});

const { apellidos: apellido } = crearPersona2('Fernando','Pérez');
//console.log({apellido});

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  //edad: 40,
  trajes: ['Mark I', 'Mark V', 'HulkBuster']
};

const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}

imprimePropiedades(tony);