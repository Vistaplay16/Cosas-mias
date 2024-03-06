$(document).ready(function () {
    $('#solucion').on('click',function () {
        var vala=$('#vala').val();
        var valb=$('#valb').val();
        var valc=$('#valc').val();
        var cadenaXML="<ecuacion><segundo><a>"+vala+"</a><b>"+valb+"</b><c>"+valc+"</c></segundo></ecuacion>";
        $.ajax({
            type: "POST",
            url: "php/ejercicio05.php",
            data: cadenaXML,
            dataType: "XML",
            success: function (response) {
                var sol1=$(response).find('sol1');
                var sol2=$(response).find('sol2');
                $('#sol1').val($(sol1).text());
                $('#sol2').val($(sol2).text());
            },error: function(xhr, status, error) {
				console.error('Error en la solicitud:', status, error);
			}
        });
    })
});