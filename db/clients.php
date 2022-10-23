<?php
  header('Access-Control-Allow-Origin: *'); 
  $mysqli = mysqli_init();
  $mysqli->ssl_set(NULL, NULL, "/etc/ssl/certs/ca-certificates.crt", NULL, NULL);
  $mysqli->real_connect("us-east.connect.psdb.cloud", "odulyxa067w19zx2nxji", "pscale_pw_5pjsUEuroOWeCUm5qYlAkWAawruPAYiUOWAR5Brkdt9", "competo");
  //servidor de base de datos, usuario, contraseña, base de datos
  $rs = $mysqli -> query("SELECT * FROM CLIENTS");
  //se indica la consulta SQL

  while($row = $rs -> fetch_assoc()) {
    $res[] = $row;
  };
  echo json_encode($res, JSON_UNESCAPED_UNICODE);

  $mysqli->close();
?>