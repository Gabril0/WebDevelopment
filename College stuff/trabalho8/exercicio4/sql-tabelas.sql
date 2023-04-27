CREATE TABLE Cliente
(
   nome varchar(50),
   cpf varchar(50),
   email varchar(50),
   hashsenha integer,
   idEndereco integer foreign key, 
   codigo integer
) ENGINE=InnoDB;

CREATE TABLE ClienteEndereco
(
   idEndereco integer primary key,
   cep varchar(50),
   endereco varchar(50),
   bairro varchar(50),
   cidade varchar(50),
   estado varchar(50)
)

