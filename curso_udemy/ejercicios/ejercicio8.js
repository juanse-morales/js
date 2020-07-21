// Ejercicio #8

/*  
Calculadora:
1. Pida dos números por pantalla.
2. Si el usuario digita uno mal lo vuelva a pedir.
3. En el cuerpo de la página, en una alerta y por la consola mostrar el resultado de sumar, restar, multiplicar y dividir esa dos cifras.
*/

var numero1 = parseInt(prompt('Ingrese el primer número: '));
var numero2 = parseInt(prompt('Ingrese el segundo número: '));

while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt('Ingrese el primer número: '));
  numero2 = parseInt(prompt('Ingrese el segundo número: '));
}

var resultado = 'La suma es: '+(numero1+numero2)+'<br>'+
                'La resta es: '+(numero1-numero2)+'<br>'+
                'La multiplicación es: '+(numero1*numero2)+'<br>'+
                'La división es: '+(numero1/numero2)+'<br>';

var resultado2 = 'La suma es: '+(numero1+numero2)+'\n'+
                'La resta es: '+(numero1-numero2)+'\n'+
                'La multiplicación es: '+(numero1*numero2)+'\n'+
                'La división es: '+(numero1/numero2)+'\n';

document.write(resultado);
alert(resultado2);
console.log(resultado2);