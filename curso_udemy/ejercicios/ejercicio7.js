// Ejercicio #7

/* Tabla de multiplicar de un número introducido por pantalla */

var numero = parseInt(prompt('Introduce el número: '));

for(var i=1; i<=10; i++){
  console.log(numero+' * '+i+' = '+(numero*i));
}

// Todas las tablas de multiplicar
console.log('Todas las tablas de multiplicar\n');
for(var f=1; f<=10; f++){
  for(var i=1; i<=10; i++){
    console.log(f+' * '+i+' = '+(f*i));
  }
}