$(document).ready(function() {
    $('#incluir').on('click', function(){
        if($('#familia').val()==""  || $('#subfamilia').val()=="" || $('#individuos').val()==""){
            alert("Tienes que introducir todos los datos");
        } else {
            var ElementosTbodyTr=$('#tablaanimales tbody').find('tr');
            //AGREGAR A LA TABLA DE FORMA ORDENADA
            var a=true;
            var indice=0;
            while (a && indice<$(ElementosTbodyTr).length) {
                let celdas=$(ElementosTbodyTr[indice]).find('td');
                var familiaActual = $(celdas[0]).text();
                var subfamiliaActual = $(celdas[1]).text();
                if($('#familia').val()==familiaActual && $('#subfamilia').val()==subfamiliaActual){
                    a=false;
                }else if($('#familia').val()<familiaActual || ($('#familia').val()==familiaActual && $('#subfamilia').val()>subfamiliaActual)){
                    $(ElementosTbodyTr[indice]).before('<tr><td>'+$('#familia').val()+'</td><td>'+$('#subfamilia').val()+'</td><td>'+$('#individuos').val()+'</td></tr>');
                    a=false;
                }else{
                    indice+=1;
                }
            }
            if(a){
                $('#tablaanimales tbody').append('<tr><td>'+$('#familia').val()+'</td><td>'+$('#subfamilia').val()+'</td><td>'+$('#individuos').val()+'</td></tr>');
            }
            //TRES ULTIMAS FILAS
            var ultimasTresFilas = $("#tablaanimales tfoot tr td:last-child");
            ultimasTresFilas.each(function(index, element){
                if(index==0){
                    var Ant=parseInt($(element).text());
                    var nuevo=Ant+parseFloat($('#individuos').val());
                    $(element).text(nuevo);
                } else if(index==1){
                    var ElementosTDFam=$('#tablaanimales tbody tr td:first-child');
                    var arrayFamilias=[];
                    ElementosTDFam.each(function (index, element){
                        arrayFamilias.push($(element).text());
                    });
                    var arrayFamiliasSinRep=$.unique(arrayFamilias);
                    $(element).text(arrayFamiliasSinRep.length);
                } else if(index==2){
                    $(element).text($('#tablaanimales tbody tr').length);
                }
            });
        }
    });
});
