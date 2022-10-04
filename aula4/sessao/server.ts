import express, { Express, Request, Response } from 'express'
import session from 'express-session';
import path from 'path';
import Usuario from "./model/Usuario";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "static")));

app.use(session({
    name: "mynodelogin",
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.get('/', function (req: Request, res: Response) {
    res.sendFile(path.join(path.join(__dirname+'/email.html')))
})

app.post('/auth', async function (req: Request, res: Response) {
    let username = req.body.username;
    console.log(username)
    let password = req.body.password;
    console.log(password)

    if (username && password) {
        let logado = await Usuario.localizaUsuario(username, password);
        console.log(logado?.toJSON())
        res.send("Entrou dentro do login")
        res.end();
    } else {
        res.send("Digite usuario e senha")
    }
})

app.listen(3000, function () {
    console.log("Server in use")
})

