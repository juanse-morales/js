var formulario = document.querySelector("#formpeliculas");
var formularioBorrar = document.querySelector("#formBorrarPelicula");

formulario.addEventListener('submit',()=>{
  var titulo = document.querySelector('#addpelicula').value;
  if(titulo.length > 0){
    localStorage.setItem(titulo,titulo);
  }
});

formularioBorrar.addEventListener('submit',()=>{
  localStorage.removeItem(document.querySelector("#borrarPelicula").value);
});

var ul = document.querySelector('#peliculas-list');
for(let i in localStorage){
  if(typeof localStorage[i] == 'string'){
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
  }
}