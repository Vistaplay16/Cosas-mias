$(document).ready(function () {
    $('#obtener').on('click', function () {
        var velo=$('#velo').val();
        var roza=$('#roza').val();
        var datos={
            Velocidad: velo,
            Rozamiento: roza
        }
        var datosJSON= JSON.stringify(datos);
        $.ajax({
            type: "POST",
            url: "php/ejercicio06.php",
            data: datosJSON,
            dataType: "json",
            success: function (response) {
                $('#dis').val(response['Distancia']);
            },error(err){
                console.log(err);
                alert("Error");
            }
        });
    });
});