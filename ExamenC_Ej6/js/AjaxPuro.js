if(document.addEventListener){
    window.addEventListener('load',inicio)
}else if(document.attachEvent){
    window.attachEvent('onload',inicio);
}
function inicio() {
    if(document.addEventListener){
        document.getElementById('obtener').addEventListener('click', enviar)
    }else if(document.attachEvent){
        document.getElementById('obtener').attachEvent('onclick',enviar)
    }
}
function enviar() {
    var velo=document.getElementById('velo').value;
    var roza=document.getElementById('roza').value;
    var datos={
        Velocidad:velo,
        Rozamiento:roza
    }
    var datosJSON=JSON.stringify(datos);
    console.log(datosJSON)
    var conexion=new XMLHttpRequest;
    conexion.open('POST', 'php/ejercicio06.php', true)
    conexion.setRequestHeader('Content-type', 'application/JSON');
    if(document.addEventListener){
        conexion.addEventListener('readystatechange', function () {
            if(conexion.readyState === XMLHttpRequest.DONE){
                if(conexion.status===200){
                    recbido(conexion.responseText)
                }else{
                    error()
                }
            }
        });
    }else if(document.attachEvent){
        conexion.attachEvent('onreadystatechange',function () {
            if(conexion.readyState === XMLHttpRequest.DONE){
                if(conexion.status===200){
                    recbido(conexion.responseText)
                }else{
                    error()
                }
            }
        });
    }
    conexion.send(datosJSON);
}
function recbido(response) {
    var respuesta=JSON.parse(response)
    document.getElementById('dis').value=respuesta['Distancia']
}
function error() {
    alert("Ocurrió un error al realizar la solicitud");
}