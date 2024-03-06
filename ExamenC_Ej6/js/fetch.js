if(document.addEventListener){
    window.addEventListener('load', inicio);
}else if(document.attachEvent){
    window.attachEvent('onload',inicio);
}

function inicio() {
    if(document.addEventListener){
        document.getElementById('obtener').addEventListener('click', enviar);
    }else if(document.attachEvent){
        document.getElementById('obtener').attachEvent('onclick',enviar);
    }
}
function enviar() {
    var velo=document.getElementById('velo').value
    var roza=document.getElementById('roza').value
    var datos={
        Velocidad:velo,
        Rozamiento:roza
    }
    var datosJSON= JSON.stringify(datos)
    var objetoFetch={
        method:'POST',
        body:datosJSON,
		headers:{'Content-Type': "text/JSON"},
    }
    fetch('php/ejercicio06.php', objetoFetch)
        .then(correcto)
        .catch(error)
}
function correcto(data) {
    data.text().then(function(data) {
        var respuesta=JSON.parse(data)
        document.getElementById('dis').value=respuesta['Distancia'];
    });

}
function error(err) {
    console.log(err);
    alert('Fallo al conectar')
  
}