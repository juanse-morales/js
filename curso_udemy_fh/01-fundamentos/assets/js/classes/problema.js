const fher = {
  nombre: 'Fernando',
  edad: 30,
  imprimir(){
    console.log(`Nombre ${this.nombre} - Edad: ${this.edad}`);
  }
}

const pedro = {
  nombre: 'Pedro',
  edad: 15,
  imprimir(){
    console.log(`Nombre ${this.nombre} - Edad: ${this.edad}`);
  }
}

function Persona(nombre,edad){
  console.log('Se ejecutó esta línea');
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function(){
    console.log(`Nombre ${this.nombre} - Edad: ${this.edad}`);
  }
}

const maria = new Persona('María',18);
console.log(maria);