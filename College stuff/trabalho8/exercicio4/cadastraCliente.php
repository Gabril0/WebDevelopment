<?php
    $nome = $_GET["nome"];
    $cpf = $_GET["cpf"];
    $email = $_GET["email"];
    $senha = $_GET["senha"];
    $cep = $_GET["cep"];
    $endereco = $_GET["endereco"];
    $bairro = $_GET["bairro"];
    $cidade = $_GET["cidade"];
    $estado = $_GET["estado"];
    $termos = $_GET["termos"];

    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);



    try {

        $sql = <<<SQL
        -- Repare que a coluna Id foi omitida por ser auto_increment
        INSERT INTO Cliente (nome, cpf, email, hashsenha)
        VALUES (?, ?, ?, ?, ?)
        SQL;
      
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $nome, $cpf, $email, $senhaHash
        ]);

      } 
      catch (Exception $e) {  
        if ($e->errorInfo[1] === 1062)
          exit('Erro!!' . $e->getMessage());
      }
    try {

        $sql = <<<SQL
        INSERT INTO ClienteEndereco (cep, endereco, bairro, cidade, estado)
        VALUES (?, ?, ?, ?)
        SQL;
      
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $cep, $endereco, $bairro, $cidade, $estado
        ]);

      } 
      catch (Exception $e) {  
        if ($e->errorInfo[1] === 1062)
          exit('Erro!!' . $e->getMessage());
      }
      
      header("location: mostraClientes.php");
      exit();


  ?>
