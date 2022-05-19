DROP DATABASE IF EXISTS to_do_list;

CREATE DATABASE to_do_list;

USE to_do_list;

CREATE TABLE Task (
    id INT NOT NULL auto_increment,
    name VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO to_do_list.Task (name, status) VALUES
    ("Exercicio 1", "pendente"),
    ("Exercicio 2", "em andamento"),
    ("Exercicio 3", "pronto");