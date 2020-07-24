// BOM

function getWindow(){
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.location);
  console.log(window.location.href)
}

getWindow();

function getScreen(){
  console.log(screen.width);
  console.log(screen.height);
}

getScreen();

function redirect(url){
  window.location.href = url;
}

function abrirPestaña(url){
  window.open(url);
}

function abrirVentana(url){
  window.open(url,"","width=600,height=600");
}