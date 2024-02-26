if(document.addEventListener){
	window.addEventListener("load",iniciar)
}else if(document.attachEvent){
	window.attachEvent('onload', iniciar);
}

function iniciar(){
	if(document.addEventListener){
		window.addEventListener('popstate', enviar);
	}else if(document.attachEvent){
		window.attachEvent('onpopstate', enviar);
	}
}
function enviar(){
	var urlCompleta = window.location.href;
	var urlPartes=urlCompleta.split('#');
	var provincia=urlPartes[1];
	let objetoFetch={
		method:"GET",
		headers:{"Content-Type":"application/x-www-form-urlencoded"}
	}
	fetch(provincia, objetoFetch)
		.then(correcto)
		.catch(errores);
}
function correcto(respuesta){
	if (respuesta.ok)
		respuesta.text().then(recibido);
}
function errores(){
	alert("Error en la conexión");
}
function recibido(dato){
	document.getElementById("contenido").innerHTML=dato;	
}