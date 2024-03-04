<?php 
session_start();
if(isset($_POST['Volver'])){
    header("Location: ../views/movwelcome.php");
}else{
    include '../models/functionsDB.php';
    $fechaIni=$_POST['fechadesde'];
    $fechaFin=$_POST['fechahasta'];
    if($fechaFin==''){
        $recibido=consultaAlquilerVehiculos($_SESSION['idcliente'], $fechaIni, date('Y/m/d'));
        $_SESSION['resultadoCon']=$recibido;
    }else{
        $recibido=consultaAlquilerVehiculos($_SESSION['idcliente'], $fechaIni, $fechaFin);
        $_SESSION['resultadoCon']=$recibido;
    }
    header('Location: ../views/movconsultar.php');
}
?>