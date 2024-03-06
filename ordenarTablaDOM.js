if(document.addEventListener){
    window.addEventListener('load', iniciar);
}else if(document.attachEvent){
    window.atachEvent('onload', iniciar);
}
function iniciar(){
    if(document.addEventListener){
        document.getElementById('poner').addEventListener('click', poner);
    }else if(document.attachEvent){
        document.getElementById('poner').attachEvent('onclick', poner);
    }
}

function poner(){
    var nomCiudad=document.getElementById('ciudad').value
    var nomPais=document.getElementById('pais').value
    var numHabit=document.getElementById('habita').value
    var tabla=document.getElementById('tablaciudad').getElementsByTagName('tbody');
    var numeros = "0123456789";

    let x=false;
    for (let i = 0; i < tabla[0].getElementsByTagName('tr').length; i++) {
        var fila=tabla[0].getElementsByTagName('tr');
        var celdas=fila[i].getElementsByTagName('td');
        if(celdas[0].textContent==nomCiudad && celdas[1].textContent==nomPais ){
            x=true
            break;
        }
    }

    var LiElements=document.querySelectorAll('#listaciudades li')
    let k=false;
    for (let i = 0; i < LiElements.length; i++) {
        var ElementoLi=LiElements[i].textContent.split('-');
        if(ElementoLi[0]==nomCiudad || ElementoPai==nomPais){
            k=true
            break;
        }
    }
    

    if(nomCiudad=="" || nomPais=="" ||numHabit==""){
        alert('Tienes que introducir todos los datos')   
    }else if(!numeros.includes(numHabit)){
        alert('El numero de habitantes solo puede contener numeros');
    }else if(x){
        var CeldaRep=document.querySelector("#tablaciudad tfoot tr:last-child td:last-child");
        CeldaRep.textContent++;
        if(k==false){
            var listaRep=document.getElementById('listaciudades');
            var ElementoLi=document.createElement('li');
            listaRep.appendChild(ElementoLi)
            ElementoLi.textContent=nomCiudad+'-'+nomPais;
        }
    }else{
        var ElementoTR=document.createElement('tr');
        var ElementoCiu=document.createElement('td');
        var ElementoPai=document.createElement('td');
        var ElementoHab=document.createElement('td');
        var numTotal=document.querySelector('#tablaciudad tfoot tr:first-child td:last-child')
        if(numTotal.textContent==""){
            numTotal.textContent=parseFloat(numHabit)
        }else{
            numTotal.textContent=parseFloat(numTotal.textContent) + parseFloat(numHabit)
        }
        var ElementosTbodyTr=tabla[0].getElementsByTagName('tr');
        var a=true;
        var indice=0;
        while (a && indice<ElementosTbodyTr.length) {
            let celdas=ElementosTbodyTr[indice].getElementsByTagName('td');
            console.log(nomCiudad<celdas[0].textContent)
            if(numHabit<celdas[2].textContent){
                a=false;
            }else{
                indice+=1;
            }
            
        }
        ElementoTR.appendChild(ElementoCiu);
        ElementoTR.appendChild(ElementoPai);
        ElementoTR.appendChild(ElementoHab);
        ElementoCiu.textContent=nomCiudad;
        ElementoPai.textContent=nomPais;
        ElementoHab.textContent=numHabit;
        if(ElementosTbodyTr.item(indice)){
            if(a==false){
                console.log('es mayor que: '+ElementosTbodyTr.item(indice))
                tabla[0].insertBefore(ElementoTR, ElementosTbodyTr.item(indice));
            }else{
                console.log('no es mayor que:'+ElementosTbodyTr.item(indice).textContent)
                ElementosTbodyTr.item(indice).insertBefore(ElementoTR);
            }
        }else{
            tabla[0].appendChild(ElementoTR)
        }

    }


    

}