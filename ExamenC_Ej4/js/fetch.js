if(document.addEventListener){
    window.addEventListener('click', inicio);
}else if(document.attachEvent){
    window.attachEvent('onclick',inicio) ;
}
function inicio() {
    if(document.addEventListener){
		document.getElementById('calcular').addEventListener('click', enviar);
    }else if(document.attachEvent){
        document.getElementById('calcular').attachEvent('onclick', enviar);
    }
}
function enviar() {
    var caras=document.getElementById('caras').value;
    var vertices=document.getElementById('vertices').value;
    var datos={
        numcaras: caras,
        numvertices:vertices,
    }
    console.log(datos)
    datosJSON= JSON.stringify(datos); 
    var objetoFetch={
        method:"POST",
        body: datosJSON,
		headers:{'Content-Type': "application/JSON"},
    }
    fetch('php/ejercicio04.php', objetoFetch)
    .then(correcto)
    .catch(error)
}
function correcto(data) {
    data.text().then(function(data) {
        document.getElementById('aristas').value = data;
    });
}
function error() { 
    alert('Ha ocurrido un error');
}
