// Fetch

var usuarios = [];
var div_usuarios = document.querySelector("#usuarios");

// Otra url: https://reqres.in/api/users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(data =>{
    usuarios = data;
    usuarios.map((user)=>{
      let nombre = document.createElement('h3');
      nombre.innerHTML = user.name;
      div_usuarios.appendChild(nombre);
      document.querySelector(".loading").style.display = "none";
    })
  })