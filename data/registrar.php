<?php
    
    header( 'Content-Type: application/json');

    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $email = $jsonObj["pEmail"];
    $user = $jsonObj["pUser"];
    $pass = $jsonObj["pPass"];

    $consulta = "INSERT INTO regis(nombre, email, pass)
                VALUES  ('" . $user ."',
                        '". $pass ."',
                        '" . $email ."')";

    $res = $obj->registrarUsuario( $consulta );

    if($res == 1){
        $response['status'] = 1;
    }else{
        $response['status'] = 0;
        
    }

    echo json_encode($response, JSON_FORCE_OBJECT);
?>