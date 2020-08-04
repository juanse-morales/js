// Local Storage

// Comprobar compatibilidad de localstorage con el navegador
if(typeof(Storage)!=='undefined'){
  console.log('Compatible');
}else{
  console.log('NO compatible');
}


// Guardar datos
localStorage.setItem('titulo','Curso de JavaScript');


//Recuperar datos
document.querySelector('#peliculas').innerHTML = localStorage.getItem("titulo");


//Guardar objetos
var usuario = {
  nombre: 'Sara',
  apellidos: 'Rodriguez',
  email: 'sara@gmail.com',
  web: 'saraweb.es'
}

localStorage.setItem('user',JSON.stringify(usuario));


// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem('user'));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" - "+userjs.nombre);


// Eliminar un item
localStorage.removeItem('user');


// Eliminar todos los items
localStorage.clear();