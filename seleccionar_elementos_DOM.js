var div = document.getElementById("mi_div");
//div.classList.add("my_class");

var div1 = document.getElementsByClassName("my_class");
console.log(div1);

var div2 = document.getElementsByTagName("div");
console.log(div2);

var mi_clase = document.querySelector(".my_class");
console.log(mi_clase);

var mi_clase2 = document.querySelectorAll(".my_class");
console.log(mi_clase2);

var div3 = document.querySelectorAll("div");
console.log(div3);

function $(selector){
	return document.querySelector(selector);
}

var mi_clase3 = $(".my_class");
console.log(mi_clase3);