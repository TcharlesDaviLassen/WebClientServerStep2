import Usuario from "./model/Usuario";

// (async () => {

//     await Usuario.sync({ force: true });

//     const result = [
//         {
//             nome: 'tcharles',
//             senha: '123456',
//             email: "tcharlesdavilassen@gmail.com"
//         }
//     ]

//     for (let i = 0; i < result.length; i++) {
//         const element = result[i];

//         await Usuario.create(element)
//     }
// })


// import { Sequelize, DataTypes, Model } from 'sequelize';
// import sequelize from "./sequelize";

// import Usuario from "./model/Usuario";

// async function atualizaDb()
// {

//     // await Usuario.sync({force: true})

//     console.log(Usuario);
//     await Usuario.sync({force:true});
//     await Usuario.create({nome:"Tcharles", senha:"123456",email:"tcharlesdavilassen@gmail.com"})

//     let logado:any = await Usuario.localizaUsuario('tcharlesdavilassen@gmail.com','123456');
//     console.log(logado.toJSON());
// }

// atualizaDb();



(async () => {

    await Usuario.sync({ force: true })

    console.log(Usuario);
    await Usuario.sync({ force: true });
    await Usuario.create({ nome: "Tcharles", senha: "123456", email: "tcharlesdavilassen@gmail.com" })

    let logado: any = await Usuario.localizaUsuario('tcharlesdavilassen@gmail.com', '123456');
    console.log(logado.toJSON());
})()
