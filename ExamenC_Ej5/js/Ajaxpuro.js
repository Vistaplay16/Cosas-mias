if(document.addEventListener){
    window.addEventListener('load', inicio)
}else if(document.attachEvent){
    window.attachEvent('onload', inicio);
}
function inicio() {
    if(document.addEventListener){
        document.getElementById('solucion').addEventListener('click', enviar)
    }else if(document.attachEvent){
        document.getElementById('solucion').attachEvent('onclick', enviar);
    }
}
function enviar() {
    var vala = document.getElementById("vala").value;
    var valb = document.getElementById("valb").value;
    var valc = document.getElementById("valc").value;
    var cadenaXML="<ecuacion><segundo><a>"+vala+"</a><b>"+valb+"</b><c>"+valc+"</c></segundo></ecuacion>";
    var conexion=new XMLHttpRequest;
    conexion.open('POST', 'php/ejercicio05.php', true);
    conexion.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    conexion.addEventListener('readystatechange', function () {
        if(conexion.readyState === XMLHttpRequest.DONE){
            if(conexion.status == 200){
                correcto(conexion.responseText);
            }else{
                error();
            }
        }
    })
    conexion.send(cadenaXML);
}
function correcto(data) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(data, "text/xml");
    var sol1= xmlDoc.getElementsByTagName("sol1")[0].firstChild.nodeValue;
    var sol2= xmlDoc.getElementsByTagName("sol2")[0].firstChild.nodeValue;
    document.getElementById('sol1').value=sol1;
    document.getElementById('sol2').value=sol2;
}
function error() {
    alert("Error en el servidor")

}