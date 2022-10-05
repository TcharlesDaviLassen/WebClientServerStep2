import express, {Express, Request, Response} from 'express';
import Usuario from './model/Usuario';
import cors from 'cors';
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(cors());

app.get("/auth", async function(req:Request, res: Response)
{
    
    let username = req.headers.username +"";
    let password =  req.headers.password +"";

    console.log(username, password);

    let logado = await Usuario.localizaUsuarios(username, password);
    console.log(logado?.toJSON());

    res.json(logado)
})

app.get("/verify", async function(req:Request, res: Response)
{
    
    let username = req.headers.username +"";
    let password =  req.headers.password +"";

    console.log(username, password);

    let logado = await Usuario.localizaUsuarios(username, password);
   
    console.log(logado?.toJSON());
    res.json(logado)
})


app.listen(3000, function()
{
    console.log("Back online!");
});
