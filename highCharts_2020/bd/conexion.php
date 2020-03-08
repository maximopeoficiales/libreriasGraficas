<?php
class Conexion
{
    public static function Conectar()
    {
        define('servidor', 'localhost');
        define('bd', 'tiendacrud');
        define('usuario', 'root');
        define('password', '');
        define('port', 3307);/* en mi caso uso este puerto */

        $opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
        try {
            $conexion = new PDO("mysql:host=" . servidor . "; port=" . port . "; dbname=" . bd, usuario, password, $opciones);
            return $conexion;
        } catch (\Throwable $th) {
            die("El error de Conexion es: " . $th->getMessage());
        }
    }
}
