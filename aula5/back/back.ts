import express, { Express, Request, response, Response } from 'express';

const path = require('path');

import cors from 'cors';
import Usuario from './model/Usuario';
import session from 'express-session';

import * as SessionData from './types/types'
import { request } from 'http';

const app = express();
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname))); //Sem parâmetro leria tudo o que está na raiz

//Configurações do COOKIE
app.use(session(
    {
        name: 'nodelogin',
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    }
));


app.get('/', function (req: Request, res: Response) {
    res.json({ sucesso: 1 })
});


app.get('/auth', async function (req: Request, res: Response) {

    // res.json({ sucesso: 2 })

    console.log('username=' + req.query.username)
    console.log('password=' + req.query.password)

    const logado = await Usuario.localizaUsuarios(req.query.username + "", req.query.password + "")
    console.log(logado?.toJSON());

    if (logado && logado.id) {

        req.session.loggedIn = true;
        req.session.username = logado.nome;
        req.session.userId = logado.id;
        req.session.email = logado.email;
        req.session.type = "Admin";

        console.log(req.session.username);
        console.log(req.session.userId);

        res.json(true)
    } else {
        res.json(false)
    }

});


app.get('/verify', function (req: Request, res: Response) 
{
    let result = 
    {
        loggedIn: req.session.loggedIn+"",
        userId: req.session.userId+"",
        username: req.session.username+"",
        type: req.session.type+"",
    }

  res.json(result)
});


app.get("/out", function(request: Request, response: Response) 
{
    request.session.destroy( () => {
        console.log("Sessão destruida!")
    })
});

app.listen(3000, function () {
    console.log("Back online!");
});
