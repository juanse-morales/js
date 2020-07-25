// Fetch

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

function getUsuarios(){
  // Otra url: https://reqres.in/api/users
  return fetch('https://jsonplaceholder.typicode.com/users');
}

function getJanet(){
  return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
  var profesor = {
    nombre: 'Sara',
    apellidos: 'Rodriguez',
    url: 'https://saraweb.es'
  };
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      var profesor_string = JSON.stringify(profesor);
      if(typeof profesor_string != 'string') return reject('error');
      return resolve(profesor_string);
    },3000);
  });
}

function listadoUsuarios(usuarios){
  usuarios.map((user)=>{
    let nombre = document.createElement('p');
    nombre.innerHTML = user.name;
    div_usuarios.appendChild(nombre);
    document.querySelector(".loading").style.display = "none";
  })
}

function mostrarJanet(user){
  let nombre = document.createElement('h3');
  let avatar = document.createElement('img');
  nombre.append(user.first_name+" "+user.last_name);
  avatar.src = user.avatar;
  avatar.width = "200";
  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
  document.querySelector("#janet .loading").style.display = "none";
}

getUsuarios()
.then(data => data.json())
.then(data =>{
  listadoUsuarios(data);
  return getInfo();
})
.then(data => {
  div_profesor.append(data);
  document.querySelector("#profesor .loading").style.display = "none";
  return getJanet();
})
.then(data => data.json())
.then(user => {
  mostrarJanet(user.data);
})
.catch(err => console.log(err))

