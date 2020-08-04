// Función anónima y callbacks

// Función anónima es una función que no tiene nombre

// Función anónima
var pelicula = function(nombre){
  return "La película se llama: "+nombre;
}


// Callback

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
  var sumar = numero1+numero2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
}

sumame(3,7, dato=> console.log('La suma es: ', dato),dato => console.log('La suma por dos es: ', (dato*2)));