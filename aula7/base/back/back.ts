import express, { Express, Request, Response } from 'express';
import Usuario from './model/Usuario';
import cors from 'cors'; //Ajuda na segurança 
const path = require('path');// Lê os pacotes do projeto

const app = express();
app.use(express.static(path.join(__dirname)));//Sem filtro lê todos os pacotes
app.use(express.json());
app.use(cors());


async function authentication(req: Request) {

    let authorization = req.headers.authorization+"";
    console.log("req.headers.authorization")
    console.log(authorization)

    authorization = authorization.replace("Basic", "");

    let ascii = Buffer.from(authorization, "base64").toString("ascii");
    let dados = ascii.split(":")

    console.log("Usando o authentication")
    console.log(authorization)

    console.log("DADOS")
    console.log(dados)

    console.log("ascii")
    console.log(ascii)

    let username =  dados[0];
    let password =  dados[1];

    console.log(username, password);

    let logado = await Usuario.localizaUsuarios(username, password);
    console.log(logado?.toJSON());
    return logado;

}


app.get("/auth", async function (req: Request, res: Response) {
    console.log("Usando o auth")
    res.json( await authentication(req))
})

app.get("/verify", async function (req: Request, res: Response) {

    console.log("Usando o verify")

    let usuario = await authentication(req)
    res.json(usuario)
})


app.listen(3000, function () {
    console.log("Back online!");
});
