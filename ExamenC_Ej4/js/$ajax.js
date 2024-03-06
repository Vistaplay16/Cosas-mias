$(document).ready(function () {
	$('#calcular').on('click',function () {
		var url= 'http://localhost/ExamenC_Ej4/php/ejercicio04.php';
		var caras=$('#caras').val();
        var vertices=$('#vertices').val();
        console.log(caras)
		$.ajax({
			type: "POST",
			url: url,
			data: { 
                numcaras: caras,
                numvertices: vertices
            },
			dataType: "text",
			success: function (response) {
				$('#aristas').val(response)
			},
			error: function(xhr, status, error) {
				console.error('Error en la solicitud:', status, error);
			}
		});
	});
});