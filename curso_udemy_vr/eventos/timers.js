// Timers

// setIterval se ejecuta infinitamente
function intervalo(){
  var tiempo = setInterval(()=>{
    var encabezado = document.querySelector("h1");
    if(encabezado.style.fontSize == '50px'){
      encabezado.style.fontSize = '30px';
    }else{
      encabezado.style.fontSize = '50px';
    }
  },1000);
  return tiempo;
}


// setTimeout se ejecuta una sola vez
var tiempo2 = setTimeout(()=>{
  var encabezado2 = document.querySelector("h2");
  encabezado2.style.fontSize = '50px';
},2000);


var tiempo = intervalo();
var stop = document.querySelector('#stop');

stop.addEventListener('click',()=>{
  if(stop.textContent == 'Stop'){
    clearInterval(tiempo);
    stop.innerHTML = 'Play';
  }else{
    tiempo = intervalo();
    stop.innerHTML = 'Stop';
  }
});