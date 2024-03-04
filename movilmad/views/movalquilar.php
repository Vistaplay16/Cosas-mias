<?php 
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
		<div class="card-header">Menú Usuario - ALQUILAR VEHÍCULOS</div>
		<div class="card-body">
	  	  

	<!-- INICIO DEL FORMULARIO -->
	<form action="../controllers/carrito.php" method="post">
	
		<B >Bienvenido/a:</B><?php echo $_SESSION['nombre'].' '.$_SESSION['apellido'];?>    <BR><BR>
		<B >Identificador Cliente:</B> <?php echo $_SESSION['idcliente'];?>  <BR><BR>
		
		<B>Vehiculos disponibles en este momento:</B> <?php echo date('Y/m/d H:i:s')?><BR><BR>
		
			<B>Matricula/Marca/Modelo: </B>
			<select name="vehiculos" class="form-control">
				<?php 
				include '../controllers/listaVehiculos.php';
				$recibido=devolverLista('S');
				for ($i=0; $i < count($recibido); $i++) { 
					echo '<option value="'.$recibido[$i]['matricula'].'//'.$recibido[$i]['modelo'].'">'.$recibido[$i]['matricula'].'/'.$recibido[$i]['marca'].'/'.$recibido[$i]['modelo'].'</option>';
				}
				
				?>
			</select>

			<b>Carrito</b>
			<?php 
			$x=false;
			foreach ($_COOKIE as $key => $value) {
				if($key=='carrito-'.$_SESSION['idcliente']){
					$x=true;
				}
			}
			if($x){
				include 'imprimirCarrito.php';
			}
			?>
			<?php 
			if(isset($_SESSION['errorCarrito'])){
				echo '<br>'.$_SESSION['errorCarrito'];
			}
			?>
		
		<BR> <BR><BR><BR><BR><BR>
		<div>
			<input type="submit" value="Agregar a Cesta" name="agregar" class="btn btn-warning disabled">
			<input type="submit" value="Realizar Alquiler" name="alquilar" class="btn btn-warning disabled">
			<input type="submit" value="Vaciar Cesta" name="vaciar" class="btn btn-warning disabled">
			<input type="submit" value="Volver" name="Volver" class="btn btn-warning disabled">
		</div>		
	</form>
	
	<!-- FIN DEL FORMULARIO -->

	<a href = "../controllers/cerrarSes.php">Cerrar Sesion</a>
			
  </body>
   
</html>

