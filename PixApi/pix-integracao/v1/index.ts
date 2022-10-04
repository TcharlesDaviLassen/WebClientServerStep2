import express, { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import cors from  'cors';

// log
const LogModel = require('./models/Log');
require('./db');

const app: Express = express();

const dados = [{
    "id": 1,
    "nome": "Mariane Benedita Cristiane Pires",
    "idade": 55
},
{
    "id": 2,
    "nome": "Renato Rodrigo Arthur Rocha",
    "idade": 23
},
{
    "id": 3,
    "nome": "Paul Jarvis",
    "idade": 80
},
{
    "id": 4,
    "nome": "Brian Young",
    "idade": 83
},
{
    "id": 5,
    "nome": "Lukas Budimaier",
    "idade": 18
}];

app.use(express.json());
app.use(cors());

app.get('/ola', (req: Request, res: Response, next: NextFunction) => {
    res.json({ content: 'Hello World' });
});

app.get('/dados', (req: Request, res: Response, next: NextFunction) => {
    res.json(dados);
});

app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await axios.get(`http://177.44.248.30/v1/users`);
    res.json(users.data);
});

app.get('/pix', async (req: Request, res: Response, next: NextFunction) => {
    const pix = await axios.get(`http://177.44.248.30/v1/pix`);
    res.json(pix.data);
});

app.get('/pix/:userId/:type', async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId;
    const type = req.params.type;

    const pix = await axios.get(`http://177.44.248.30/v1/pix/${userId}/${type}`);
    res.json(pix.data);
});

app.post('/pix', async (req: Request, res: Response, next: NextFunction) => {
    const senderId = req.body.senderId;
    const recipientId = req.body.recipientId;
    const value = req.body.value;

    const pix = await axios.post(`http://177.44.248.30/v1/pix/`, {
        senderId: senderId,
        recipientId: recipientId,
        value: value
    });

    const log = {
        action: "Create PIX",
        value: value,
        senderId: senderId,
        recipientId: recipientId
    }

    await LogModel.create(log);

    res.json(pix.data);
});

app.listen(3000);