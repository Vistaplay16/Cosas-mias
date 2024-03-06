if(document.addEventListener){
    window.addEventListener('load', inicio);
}else if(document.attachEvent){
    window.attachEvent('onload',inicio);
}
function inicio() {
    if(document.addEventListener){
        document.getElementById('solucion').addEventListener('click', enviar)
    }else if(document.attachEvent){
        document.getElementById('solucion').attachEvent('onclick',enviar)
    }
}
function enviar() {
    var vala=parseFloat(document.getElementById('vala').value);
    var valb=parseFloat(document.getElementById('valb').value);
    var valc=parseFloat(document.getElementById('valc').value);
    var cadenaXML="<ecuacion><segundo><a>"+vala+"</a><b>"+valb+"</b><c>"+valc+"</c></segundo></ecuacion>";
    var blob = new Blob([cadenaXML], { type: 'text/xml' });
    var objetoFetch={
        body:blob,
        method:'POST',
        headers:{'Content-Type':'text/xml'}
    }
    fetch('php/ejercicio05.php', objetoFetch)
        .then(correcto)
        .catch(error)
}

function correcto(response) {
    if(response.ok){
        response.text().then(function(text) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(text, "text/xml");
            var sol1 = xmlDoc.getElementsByTagName("sol1")[0].firstChild.nodeValue;
            var sol2 = xmlDoc.getElementsByTagName("sol2")[0].firstChild.nodeValue;
            document.getElementById('sol1').value = sol1;
            document.getElementById('sol2').value = sol2;
        }).catch(function(error) {
            console.error("Error al procesar la respuesta:", error);
            alert("Error al procesar la respuesta");
        });
    }
}
function error(err) {
    console.log(err);
    alert("Error al realizar la petición");
}