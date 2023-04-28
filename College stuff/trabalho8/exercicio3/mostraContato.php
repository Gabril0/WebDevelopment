<?php
  require "conexaoMysql.php";
  $pdo = mysqlConnect();

  $nome = $_GET["usuario"] ?? "";
  $email = $_GET["emailCad"] ?? "";
  $mensagem = $_GET["mensagem"] ?? "";

  try {

    $sql = <<<SQL
    INSERT INTO contato (nome, mensagem, email)
    VALUES (?, ?, ?)
    SQL;

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
      $nome, $email, $mensagem
    ]);
  } 
  catch (Exception $e) {  
    if ($e->errorInfo[1] === 1062)
      exit('Erro' . $e->getMessage());
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
    <header>
        <h1>Clínica ABC Health</h1>
    </header>
    <nav>
        <section>
            <ul>
                <li><button>Home</button></li>
                <li><button>Galeria</button></li>
                <li><button>Cadastro</button></li>
                <li><button>Contato</button></li>
            </ul>
        </section>
    </nav>
    <main>
      <table class="table">
        <tr>
          <th>Nome</th>
          <td> $nome</td>
        </tr>
        <tr>
          <th>Email</th>
          <td> $email</td>
        </tr>
        <tr>
          <th>Mensagem</th>
          <td> $mensagem</td>
        </tr>
      </table>
    </main>
  </body>
  </html>
HTML;
?>