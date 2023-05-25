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

// Verifica se o CEP possui um formato válido
if (preg_match('/^\d{5}-\d{3}$/', $cep)) {
  $url = "https://viacep.com.br/ws/{$cep}/json/";

  // Faz a requisição à API do ViaCEP
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $response = curl_exec($ch);
  curl_close($ch);

  // Verifica se a requisição foi bem-sucedida
  if ($response !== false) {
    // Converte a resposta JSON em um objeto
    $endereco = json_decode($response);

    // Verifica se o CEP foi encontrado
    if (isset($endereco->erro) && $endereco->erro === true) {
      $endereco = new Endereco('', '', '');
    } else {
      $endereco = new Endereco($endereco->logradouro, $endereco->bairro, $endereco->localidade);
    }
  } else {
    $endereco = new Endereco('', '', '');
  }
} else {
  $endereco = new Endereco('', '', '');
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($endereco);
