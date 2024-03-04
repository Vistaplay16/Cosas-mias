<?php
if(isset($_COOKIE['carrito-'.$_SESSION['idcliente']])){
    echo '<table border="1"><thead><th>MATRICULA</th><th>MODELO</th></thead><tbody>';
    $carrito=explode('//',$_COOKIE['carrito-'.$_SESSION['idcliente']]);	
    for ($i=0; $i < count($carrito); $i++) { 
        $lineaOrden=explode('~', $carrito[$i]);
        echo '<tr>';
        echo  "<td>".$lineaOrden[0]."</td>";
        echo  "<td>".$lineaOrden[1]."</td>";
        echo "</tr>";
    }
    echo '</tbody></table>';
}

?>