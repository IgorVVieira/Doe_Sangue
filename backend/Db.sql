-- Criando o banco
CREATE database "doadores";

CREATE TABLE "donor"(
    name text,
    email text,
    blood text,
);

--Inserrir dados no Banco.
INSERT INTO "donors" ("name", "email", "blood")
VALUES ('Igor Vitor', 'igor.vitor@gmail.com', 'A+');

--Buscar os dados
SELECT * from "donors";

-- Deleta os dados da tabela donors
DELETE from "donors";