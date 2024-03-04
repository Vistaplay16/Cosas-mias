<?php
session_start();
//INICIAMOS LA SESION PARA UTILIZAR SUS VARIABLES
//4918019160034602

// INCLUIMOS ARCHIVOS CON FUNCIONES RELACIONADAS CON LA BASE DE DATOS Y LA VISUALIZACIÓN
include '../models/functionsDB.php';
// DESARROLO DE LOS DIFERENTES BOTONES QUE HAY (AGREGAR, ALQUILAR, VAICAR Y VOLVER)
if(isset($_POST['agregar'])){
    $selVehiculos=explode('//',$_POST['vehiculos']);  
    $matricula=$selVehiculos[0];
    $modelo=$selVehiculos[1];
    //MIRAMOS SI EXISTE EL CARRITO YA 
    if(isset($_COOKIE['carrito-'.$_SESSION['idcliente']])){
            //MIRAMOS EL TAMAÑO DEL CARRITO Y SI ES MAS DE 3 NO SE AÑADIRA NADA AL CARRITO
        if(count(explode('//', $_COOKIE['carrito-'.$_SESSION['idcliente']]))<3){
            //MIRAMOS QUE NO SE REPIITAN  PRODUCTOS EN EL CARRITO
            $arrayCarrito=explode('//', $_COOKIE["carrito-".$_SESSION['idcliente']]);
            for ($i=0; $i <count($arrayCarrito) ; $i++) { 
                $vehiculo=explode('~',$arrayCarrito[$i]);
                $matriculas[$i]= $vehiculo[0];
            }
            if(in_array($matricula,$matriculas )){
                $_SESSION['errorCarrito']='No puedes agregar el mismo coche al carrito';
            }else{
                $_SESSION['errorCarrito']="";
                setcookie('carrito-'.$_SESSION['idcliente'], $_COOKIE['carrito-'.$_SESSION['idcliente']].'//'.$matricula.'~'.$modelo, time()+3600, '/');  
            }
        }else{
            $_SESSION['errorCarrito']='Ya tienes mas de 3  vehículos en tu carro de compras. No puedes añadir más.';
        }
    }else{
        $_SESSION['errorCarrito']="";
        setcookie('carrito-'.$_SESSION['idcliente'], $matricula.'~'.$modelo, time()+3600, '/');
    }
    header('Location: ../views/movalquilar.php');
    
}elseif (isset($_POST['vaciar'])) {
    setcookie('carrito-'.$_SESSION['idcliente'], '', time()+3600, '/' );
    $_SESSION['errorCarrito']='';
    header('Location: ../views/movalquilar.php');
}elseif (isset($_POST['alquilar'])) {
    $recibido=consultaVehiculosAlquilados($_SESSION['idcliente']);
    if(count($recibido)<=3){
        alquilar($_SESSION['idcliente'], $_COOKIE['carrito-'.$_SESSION['idcliente']]);
        setcookie('carrito-'.$_SESSION['idcliente'], '', time()+3600, '/' );
        header('Location: ../views/movalquilar.php');
    }else{
        $_SESSION['errorCarrito']='No puedes tener mas de tres coches alquilados';
    }
}elseif (isset($_POST['Volver'])) {
    header('Location: ../views/movwelcome.php');
}



?>