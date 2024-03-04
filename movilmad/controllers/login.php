<?php

include '../controllers/functions.php';

    $email=$_POST['email'];
    $id=$_POST['password'];
    $email=test_input($email);
    $id=test_input($id);

    include '../models/functionsDB.php';
    $resultado=consultaUsuario($email, $id);
    

    if(empty($resultado)){
        header('Location: ../views/movlogin.php');
    }else{
        session_start();
        $_SESSION['nombre']= $resultado[0]['nombre'];
        $_SESSION['idcliente']= $resultado[0]['idcliente'];
        $_SESSION['apellido']=$resultado[0]['apellido'];
        $nombreCookies='';
        foreach ($_COOKIE as $key => $value) {
            $nombreCookies.=$key.'/';
        }
        $arrayCookies = explode("/",$nombreCookies); 
        $x=false;
        for ($i=0; $i <count($arrayCookies) ; $i++) { 
            if(substr($arrayCookies[$i], 0, 1)=='c'){
                $x=true;
                $nombreCookie=$arrayCookies[$i];
            }
        }
        if($x){
            if(isset($_COOKIE['carrito-'.$_SESSION['idcliente']])){
                header('Location: ../views/movwelcome.php');
            }else{
                setcookie($nombreCookie, '', time()+3600, '/' );
                header('Location: ../views/movwelcome.php');
            }
        }else{
            header('Location: ../views/movwelcome.php');
        }
    }
?>