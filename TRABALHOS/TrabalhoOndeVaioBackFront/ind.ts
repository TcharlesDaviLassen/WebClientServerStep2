import express from 'express';
import { METHODS } from 'http';
// import cors from 'cors';
import * as path from 'path';

import itensRouter from './router/route'// Porta do servidor

const PORT = 3000// Host do servidor

let HOSTNAME = 'http://localhost'// App Express



let app: express.Application = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }))// Endpoint raiz

app.get('/users', (req, res) => {
    if(req.method === '/'){
        res.send({message: "Error"})
    } else {
        res.sendFile(path.join(__dirname, '../user.json'))
    }
});

// Cors
// app.use(cors({
//     origin: ['http://localhost:3000']
// }))// Rotas

app.use('/api', itensRouter)// Resposta padrão para quaisquer outras requisições:

app.use((req, res) => {
    res.status(404)
})// Inicia o sevidor

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
})