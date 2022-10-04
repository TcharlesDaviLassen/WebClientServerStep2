import { db } from './config';

export async function dbQuery(sql : string, params?: string[]) {
    try {

        let resultado = await db.query(sql, params);
        // console.table(resultado.rows);
        // console.log("aaaaaa")
        return resultado.rows;

    } catch (error) {
        console.log("Erro no dbQuerysiTS " + error)

    }
}
