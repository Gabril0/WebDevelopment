<?php
  $sql = <<<SQL
  SELECT hashsenha
  FROM Cliente
  WHERE email = ?
  SQL;

try {
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$email]);
    $row = $stmt->fetch();
    if (!$row) return false;

    return password_verify($senha, $row['hashsenha']);
  } 
  catch (Exception $e) {
    exit('Erro!! ' . $e->getMessage());
  }
?>