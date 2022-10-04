import { db } from "./config";
import { dbQuery } from "./dbQuery";

console.log("Migration")
let sql = [];

async function main() {

    let sql: string[] = [];
    // sql.push("DROP TABLE IF EXISTS produto;");

    // sql.push(`CREATE TABLE "produto" (
    // "id" SERIAL,
    // "nome" VARCHAR(250) NOT NULL,
    // "valor" NUMERIC(10,2) NULL DEFAULT NULL)`);

    // sql.push(`COMMENT ON COLUMN "produto"."id" IS 'Código'`);
    // sql.push(`COMMENT ON COLUMN "produto"."nome" IS 'Nome'`);
    // sql.push(`COMMENT ON COLUMN "produto"."valor" IS 'Valor'`);

    // sql.push(`INSERT INTO produto(nome, valor) VALUES('Bola quadrada', 89.56) RETURNING id`);
    // sql.push(`INSERT INTO produto(nome, valor) VALUES('Bola Redonda', 15.56) RETURNING id`);
    // sql.push(`INSERT INTO produto(nome, valor) VALUES('Bola Redondas', 15.56) RETURNING id`);

    sql.push("DROP TABLE IF EXISTS produto;");
    sql.push("CREATE TABLE produto(id SERIAL, nome VARCHAR(250) NOT NULL, valor NUMERIC(10, 2) NULL DEFAULT NULL);");

    sql.push("INSERT INTO produto (nome,valor) VALUES('Bola quadrada',89.56) RETURNING id;");
    sql.push("INSERT INTO produto (nome,valor) VALUES('Bola Redonda',15.56) RETURNING id;");




    for (let i = 0; i < sql.length; i++) {
        let item = (sql[i]);
        let result = await dbQuery(item);

        // console.table(item, result);
    }

    let result = await dbQuery('SELECT * FROM produto');

    console.table(result);

    await db.end()
}

main();