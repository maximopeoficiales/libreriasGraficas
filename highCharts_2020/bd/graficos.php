<?php
header('Content-type: application/json');
include_once 'conexion.php';

$objeto = new Conexion();

$conexion = $objeto->Conectar();
$result_format = array();/* creo array donde iran los datos necesarios */
$consulta = "SELECT description,sum(stock) FROM products GROUP BY description ORDER BY sum(stock) DESC";
$result = $conexion->prepare($consulta);
$result->execute();
/* $data = $result->fetchAll(PDO::FETCH_ASSOC); */

/* mientras crea un array se le agregara los valores 'description y stock al nuevo array' */

while ($fila = $result->fetch(PDO::FETCH_ASSOC)) {
    array_push($result_format, array($fila['description'], $fila['sum(stock)']));
}

/* Codifica textos numéricos como números. */
print json_encode($result_format, JSON_NUMERIC_CHECK);
$conexion=null;
