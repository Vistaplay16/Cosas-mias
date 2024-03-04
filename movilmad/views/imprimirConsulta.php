<?php 
if(isset($_SESSION['resultadoCon'])){
    foreach ($_SESSION['resultadoCon'] as $key) {
        echo 'Matricula:'.$key['matricula'].' <br>Marca: '.$key['marca'].'<br>Modelo:  '.$key['modelo'].'<br> FechaInicio: ', $key['fecha_alquiler'].'<br>FechaFin  '.$key['fecha_devolucion'].'<br>PrecioTotal:  '.$key['preciototal'].'<br>';
        echo '<hr>';
    }
}
?>