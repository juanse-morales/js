// Número máximo
var max = 100;

// Número mínimo
var min = 1;

// Número aleatorio
var num_secreto = Math.random() * (max-min) + min;
num_secreto = parseInt(num_secreto);
console.log(num_secreto);

var mensaje = "Ingresa un numero para adivinar el numero magico";

while(true){
  var num_user = prompt(mensaje,"0");
  num_user = parseInt(num_user);
  if(num_user === num_secreto){
    alert("Ganaste!!!");
    break;
  }
  else if(num_user === 0) break;
  else if(num_user > num_secreto) mensaje = "Tu numero es mayor al magico, Try again!";
  else if(num_user < num_secreto) mensaje = "Tu numero es menor al magico, Try again!";
}