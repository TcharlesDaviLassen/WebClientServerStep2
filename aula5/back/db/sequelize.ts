import { Sequelize } from 'sequelize';

console.log("Config");

const sequelize = new Sequelize("TrabalhoCrud", "postgres", "JediSupremo", {
    dialect: "postgres",
    host: "177.44.248.60",
    port: 5432,


});

// const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: process.env.DB_DIALECT
// });

(async () => {

    try {
        await sequelize.authenticate();
        console.log('tudo certo')
    } catch (ERRO) {
        console.log(' Erro ' + ERRO)
    }
})()

export default sequelize;
