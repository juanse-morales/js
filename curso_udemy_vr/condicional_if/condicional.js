// Condicional

var edad1 = 30;
var edad2 = 12;

if(edad1 > edad2){
  console.log("Edad1 es mayor que edad2");
}else{
  console.log("Edad1 es inferior");
}

var edad = 17;
var nombre = 'David Suarez';

if(edad >= 18){
  console.log(nombre+' tiene '+edad+' años, es mayor de edad');
}else{
  console.log(nombre+' tiene '+edad+' años, es menor de edad');
}

// Opeadores lógicos

var year = 2018;

if(year == 2008 || (year >=2018 && year == 2028)){
  console.log("El año acaba en 8");
}else{
  console.log("Año no registrado");
}