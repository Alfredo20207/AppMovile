<?php

    include 'DBConfig.php';
    $con = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);
    $json = file_get_connects('php://input');
    $obj = json_decode($json, true);


    $name = $obj ['name'];
    $email = $obj ['email'];
    $password = $obj['password'];

    //checar que el correo no este registrado

    $CheckSQL = "SELECT * FROM regis WHERE email = ' $email '";

    if(isset($check)){
        $EmailExistMDG = 'El correo ya existe, intente de nuevo :V';
        $EmailExistMDG = json_encode($EmailExistMDG);

        echo $EmailExistMDG;
    }
    else{
        $Sql_Query = "INSERT INTO  regis(nombre, email, pass) values ('$name, $email, $password')";

        if(mysqli_query($con, $Sql_Query)){
            $MSG = 'Usuario registrado correctamente';
            $json = json_encod($MSG);
            echo $json;
        }
        else {
            echo 'Intneta de nuevo bro';
        }
    }
    mysqli_close($con);
?>