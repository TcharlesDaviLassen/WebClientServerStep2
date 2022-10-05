const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT
});

db.sync();

export default db;

// module.exports = db;

// import { Sequelize } from 'sequelize';

// console.log("Config");

// const sequelize = new Sequelize("TrabalhoCrud", "postgres", "JediSupremo", {
//     dialect: "postgres",
//     host: "177.44.248.60",
//     port: 5432,


// });

// async function testandoDatabase() {

//     try {
//         console.log('tudo certo')
//     } catch (ERRO) {
//         console.log(' Erro ' + ERRO)
//     }
// }

// testandoDatabase();

// export default sequelize;
