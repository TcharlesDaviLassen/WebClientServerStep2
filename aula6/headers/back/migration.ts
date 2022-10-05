import Usuario from "./model/Usuario";

(async () => {

    await Usuario.sync({ force: true })

    console.log(Usuario);
    await Usuario.sync({ force: true });
    await Usuario.create({ nome: "Tcharles", senha: "123456", email: "tcharlesdavilassen@gmail.com" })

    let logado: any = await Usuario.localizaUsuarios('tcharlesdavilassen@gmail.com', '123456');
    console.log(logado.toJSON());

})()