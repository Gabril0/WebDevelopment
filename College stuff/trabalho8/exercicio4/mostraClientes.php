<?php

require "conexaoMysql.php";
$pdo = mysqlConnect();

try {
  $sql = <<<SQL
  SELECT nome, cpf, email, hashsenha
  FROM Cliente
  SQL;

  $stmt = $pdo->query($sql);
} 

catch (Exception $e) {
    exit('Ocorreu uma falha: ' . $e->getMessage());
  }

try {
  $sql = <<<SQL
  SELECT cep, endereco, bairro, cidade, estado
  FROM ClienteEndereco
  SQL;

  $stmt = $pdo->query($sql);
} 

catch (Exception $e) {
    exit('Ocorreu uma falha: ' . $e->getMessage());
  }


  echo <<<HTML
  <!DOCTYPE html>
  <html lang="zxx">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="CSS/style.css">
      <script src="js/script.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
      <title>Exercicio 2</title>
  </head>

  <body>
  <table class="table">
      <tr>
          <td>Senha Hash</td>
          <td>Nome</td>
          <td>CPF</td>
          <td>E-mail</td>
          <td>CEP</td>
          <td>Endereco</td>
          <td>Bairro</td>
          <td>Estado</td>
          <td>Cidade</td>
          <td>Termos</td>
      </tr>
      <tr>
          <td>$senhaHash</td>
          <td>$nome</td>
          <td>$cpf</td>
          <td>$email</td>
          <td>$cep</td>
          <td>$endereco</td>
          <td>$bairro</td>
          <td>$estado</td>
          <td>$cidade</td>
          <td>$termos</td>
      </tr>
  </table>
  </body>
  </html>
HTML;
?>
