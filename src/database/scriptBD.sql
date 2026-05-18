CREATE DATABASE projetoIndividual;

USE projetoIndividual;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha CHAR(8)
);

CREATE TABLE quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(20),
CONSTRAINT tipo
CHECK (tipo IN ('fundamentos', 'orixas', 'entidades'))
);

CREATE TABLE tentativa(
fkUsuario INT,
CONSTRAINT fkUsuarioTentativa
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fkQuiz INT, 
CONSTRAINT fkQuizTentativa
FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
resultado INT,
dataQuiz DATE,
PRIMARY KEY (fkUsuario, fkQuiz)
);

DESC usuario;
DESC quiz;
DESC tentativa;