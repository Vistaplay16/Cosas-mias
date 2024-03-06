<?php
	$datos = json_decode(file_get_contents("php://input"), true); 
	$numerocaras = $datos["numcaras"]; 
	$numerovertices = $datos["numvertices"];
	$numeroaristas = $numerocaras + $numerovertices - 2;
	echo $numeroaristas;
?>
