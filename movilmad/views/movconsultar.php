﻿<?php 
session_start();
?>
<html>
   
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Bienvenido a MovilMAD</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
  </head>
   
 <body>
    <h1>Servicio de ALQUILER DE E-CARS</h1> 

    <div class="container ">
        <!--Aplicacion-->
		<div class="card border-success mb-3" style="max-width: 30rem;">
		<div class="card-header">Menú Usuario - CONSULTA ALQUILERES </div>
		<div class="card-body">
	  
	  	
	   

	<!-- INICIO DEL FORMULARIO -->
	<form action="../controllers/consultaAlquileres.php" method="post">
				
		<B >Bienvenido/a:</B><?php echo $_SESSION['nombre'].' '.$_SESSION['apellido'];?>    <BR><BR>
		<B >Identificador Cliente:</B> <?php echo $_SESSION['idcliente'];?>  <BR><BR>

		     
			 Fecha Desde: <input type='datetime-local' name='fechadesde' value='' size=10 placeholder="fechadesde" class="form-control" >
			 Fecha Hasta: <input type='datetime-local' name='fechahasta' value='' size=10 placeholder="fechahasta" class="form-control"><br>
			 
			 <div>
				 <input type="submit" value="Consultar" name="Consultar" class="btn btn-warning disabled">
				 
				 <input type="submit" value="Volver" name="Volver" class="btn btn-warning disabled">
				 <br><br>
			<?php
			include 'imprimirConsulta.php';
			?>
			<br>
		
		</div>		
	</form>
	<!-- FIN DEL FORMULARIO -->
    <a href = "../controllers/cerrarSes.php">Cerrar Sesion</a>

  </body>
   
</html>
