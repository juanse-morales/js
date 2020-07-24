// Eventos: un evento es una función que se ejecuta cuando sucede algo

var boton = document.querySelector("#boton");
var bs = boton.style;

function cambiarColor(){
  var bg = boton.style.background;
  if(bg=="green"){
    bs.background = 'red';
  }else{
    bs.background = 'green';
  }

  bs.padding = '10px';
  bs.border = "1px solid #ccc";
}

// Click
boton.addEventListener("click",()=>{
  cambiarColor();
});

// Mouse over
boton.addEventListener('mouseover',()=>{
  bs.background = "#ccc";
});

// Mouse out
boton.addEventListener('mouseout',()=>{
  bs.background = "black";
  bs.color = "white";
});


// Focus
var input = document.querySelector('#campo_nombre');
input.addEventListener('focus',()=>{
  console.log('focus');
});

// Blur
input.addEventListener('blur',()=>{
  console.log('blur');
});

// Keydown
input.addEventListener('keydown',(event)=>{
  console.log("keydown - Pulsando esta tecla: "+String.fromCharCode(event.keyCode));
});

// Keypress
input.addEventListener('keypress',(event)=>{
  console.log("keypress - Tecla presionada: "+String.fromCharCode(event.keyCode));
});

// Keyup
input.addEventListener('keyup',(event)=>{
  console.log("keyup - Tecla soltada: "+String.fromCharCode(event.keyCode));
});


// Load: Evento que ejecuta el callback cuando la página ha cargado por completo
window.addEventListener('load', ()=>{

});