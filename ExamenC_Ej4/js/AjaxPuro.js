if(document.addEventListener){
    window.addEventListener('load', inicio);
}else if(document.attachEvent){
    window.attachEvent('onload',inicio);
}

function inicio() {
    if(document.addEventListener){
        document.getElementById('calcular').addEventListener('click', enviar);
    }else if(document.attachEvent){
        document.getElementById('calcular').addEventListener('click', enviar);
    }
}
function enviar() {
    var conexión=new XMLHttpRequest;
    var caras=document.getElementById('caras').value
    var vertices=document.getElementById('vertices').value
    var datos={
        numcaras:caras,
        numvertices:vertices
    }
    var datosJSON=JSON.stringify(datos);
    conexión.open('POST', 'php/ejercicio04.php',true )
    conexión.setRequestHeader("Content-type", "application/json");
    conexión.addEventListener('readystatechange', function(){
        if(conexión.readyState === XMLHttpRequest.DONE){
            if(conexión.status===200){
                recibido(conexión.responseText);
            }else{
                errores();
            }
        }
    })
    conexión.send(datosJSON);
}
function recibido(datos) {
    document.getElementById('aristas').value=datos;
}
function errores() {
    alert('Algo ha salido mal');
}