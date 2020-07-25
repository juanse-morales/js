var formulario = document.querySelector('#formulario');
var box_dashed = document.querySelector('.dashed');
box_dashed.style.display = 'none';

function display_err_name(){
  var nombre = document.querySelector('#nombre').value;
  console.log("Nombre: "+nombre);
  console.log("Length: "+nombre.length);
  if(nombre.trim() == null || nombre.trim().length == 0){
    var en = document.querySelector("#error_nombre");
    en.innerHTML = "El nombre no es válido";
    en.style.display = "block";
  }else{
    document.querySelector("#error_nombre").style.display = "none";
  }
}

formulario.addEventListener('submit',()=>{
  var nombre = document.querySelector('#nombre').value;
  var apellidos = document.querySelector('#apellidos').value;
  var edad = document.querySelector('#edad').value;
  var display = true;

  if(nombre.trim() == null || nombre.trim().length == 0){
    //alert("El nombre no es válido");
    var en = document.querySelector("#error_nombre");
    en.innerHTML = "El nombre no es válido";
    //en.style.color = "red";
    en.style.display = "block";
    display = false;
    //return false;
  }else{
    document.querySelector("#error_nombre").style.display = "none";
  }

  if(apellidos.trim() == null || apellidos.trim().length == 0){
    //alert("Los apellidos no son válidos");
    var ea = document.querySelector("#error_apellidos");
    ea.innerHTML = "Los apellidos no son válidos";
    //ea.style.color = "red";
    ea.style.display = "block";
    display = false;
    //return false;
  }else{
    document.querySelector("#error_apellidos").style.display = "none";
  }

  if(edad == null || edad <= 0 || isNaN(edad)){
    //alert("La edad no es válida");
    var ee = document.querySelector("#error_edad");
    ee.innerHTML  = "La edad no es válida";
    //ee.style.color = "red";
    ee.style.display = "block";
    display = false;
    //return false;
  }else{
    document.querySelector("#error_edad").style.display = "none";
  }

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

var input_nombre = document.querySelector("#nombre");

input_nombre.addEventListener('keyup',()=>display_err_name());
//input_nombre.addEventListener('focus',()=>display_err_name());
//input_nombre.addEventListener('blur',()=>display_err_name());