import { Sequelize } from 'sequelize';

console.log("Config");

export const sequelize = new Sequelize("TrabalhoCrud", "postgres", "JediSupremo", {
    dialect: "postgres",
    host: "177.44.248.60",
    port: 5432,


});

async function testandoDatabase() {

    try {
        console.log('tudo certo')
    } catch (ERRO) {
        console.log(' Erro ' + ERRO)
    }
}

testandoDatabase();
