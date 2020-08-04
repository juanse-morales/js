var formulario = document.querySelector('#formulario');
var box_dashed = document.querySelector('.dashed');
var input_nombre = document.querySelector("#nombre");
var input_apellidos = document.querySelector("#apellidos");
var input_edad = document.querySelector("#edad");
var display;

function display_err_name(){
  var nombre = input_nombre.value;
  if(nombre.trim() == null || nombre.trim().length == 0){
    var en = document.querySelector("#error_nombre");
    en.innerHTML = "El nombre no es válido";
    en.style.display = "block";
    display = false;
  }else{
    document.querySelector("#error_nombre").style.display = "none";
  }
}

function display_err_lastname(){
  var apellidos = input_apellidos.value;
  if(apellidos.trim() == null || apellidos.trim().length == 0){
    var ea = document.querySelector("#error_apellidos");
    ea.innerHTML = "Los apellidos no son válidos";
    ea.style.display = "block";
    display = false;
  }else{
    document.querySelector("#error_apellidos").style.display = "none";
  }

}

function display_err_edad(){
  var edad = input_edad.value;
  if(edad == null || edad <= 0 || isNaN(edad)){
    var ee = document.querySelector("#error_edad");
    ee.innerHTML  = "La edad no es válida";
    ee.style.display = "block";
    display = false;
  }else{
    document.querySelector("#error_edad").style.display = "none";
  }
}


// Listeners

input_nombre.addEventListener('keyup',()=>display_err_name());
input_apellidos.addEventListener('keyup',()=>display_err_lastname());
input_edad.addEventListener('keyup',()=>display_err_edad());

formulario.addEventListener('submit',()=>{
  var nombre = input_nombre.value;
  var apellidos = input_apellidos.value;
  var edad = input_edad.value;
  display = true;

  display_err_name();
  display_err_lastname();
  display_err_edad();

  if(display){
    box_dashed.style.display = 'block';
  }else{
    box_dashed.style.display = 'none';
  }

  var p_nombre = document.querySelector('#p_nombre span');
  var p_apellidos = document.querySelector('#p_apellidos span');
  var p_edad = document.querySelector('#p_edad span');

  p_nombre.innerHTML = nombre;
  p_apellidos.innerHTML = apellidos;
  p_edad.innerHTML = edad;

  /* var datos = [nombre,apellidos,edad];
  for(let i in datos){
    var parrafo = document.createElement('p');
    parrafo.append(datos[i]);
    box_dashed.append(parrafo);
  } */

});