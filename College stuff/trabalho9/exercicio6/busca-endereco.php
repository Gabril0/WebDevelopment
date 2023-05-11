<?php


class Endereco
{
  
  public $rua;
  public $bairro;
  public $cidade;

  function __construct($rua, $bairro, $cidade)
  {
    $this->rua = $rua;
    $this->bairro = $bairro;
    $this->cidade = $cidade;
  }
}

$cep = $_GET['cep'] ?? '';


require "conexaoMysql.php";
$pdo = mysqlConnect();

$stmt = $pdo->prepare('SELECT rua, bairro, cidade FROM trabalho9 WHERE cep = ?');
$stmt->execute([$cep]);
$result = $stmt->fetch(PDO::FETCH_ASSOC);

$endereco = new Endereco($result['rua'], $result['bairro'], $result['cidade']);


header('Content-type: application/json');
echo json_encode($endereco);
