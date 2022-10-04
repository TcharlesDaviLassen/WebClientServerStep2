import { Logs } from './TrabalhoOndeVaioBackFront/model/Logs';


(async () => {

    await Logs.sync({ force: true }); // força Exclui e adiciona a tabela 

    const usuarios = [
        {
            remetente: "2",
            destinatario: "1",
            data: "2022/09/22",
            valor: 200,
        },
    ]

    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];

        await Logs.create(usuario)

    }

})();
