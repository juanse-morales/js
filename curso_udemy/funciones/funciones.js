// Funciones: Una función es una agrupación reutilizable de un conjunto de instrucciones

function calculadora(){
  return "Hola, soy la calculadora!!";
}

var resultado = calculadora();
console.log(resultado);

// Parámetros

function calculadora2(a,b){
  console.log('Suma: '+(a+b));
  console.log('Resta: '+(a-b));
  console.log('Multiplicación: '+(a*b));
  console.log('División: '+(a/b));
}

// Parámetros opcionales

function calculadora3(a,b,mostrar=false){
  if(mostrar){
    document.write('Suma: '+(a+b)+'<br>');
    document.write('Resta: '+(a-b)+'<br>');
    document.write('Multiplicación: '+(a*b)+'<br>');
    document.write('División: '+(a/b)+'<br><br>');
  }else{
    console.log('Suma: '+(a+b));
    console.log('Resta: '+(a-b));
    console.log('Multiplicación: '+(a*b));
    console.log('División: '+(a/b));
  }
}