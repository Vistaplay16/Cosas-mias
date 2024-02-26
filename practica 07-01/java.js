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


function enviar() {
    var urlCompleta = window.location.href;
    var urlPartes = urlCompleta.split('#');
    var provincia = urlPartes[1];
    let conexión=new XMLHttpRequest();
    conexión.open('GET', provincia, true);
    conexión.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    conexión.onreadystatechange = function() {
        if (conexión.readyState === XMLHttpRequest.DONE) {
            if (conexión.status === 200) {
                recibido(conexión.responseText);
            } else {
                errores();
            }
        }
    };
    conexión.send();
}
function recibido(datos){
    document.getElementById("contenido").innerHTML = datos;
}
function errores(){
    alert('Algo ha salido mal');
}