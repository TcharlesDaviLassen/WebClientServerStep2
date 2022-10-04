import { Request, Response, NextFunction, } from 'express';
import express from 'express';
import axios from "axios";
// import { Logs } from "./model/Logs"

const LogModel = require('./model/Logs')


import * as path from 'path';
import cors from 'cors';
import { json } from "body-parser";
import fs from "fs";
import { JSON } from "sequelize";
import itensRouter from './router/route'// Porta do servidor

const PORT = 3000// Host do servidor

let app: express.Application = express();
app.use(express.json());


app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dados = await axios.get('http://177.44.248.30/v1/users');
        res.json(dados.data)

    } catch (error) {
        console.log("Erro no users" + error)
    }
})

app.get('/pix', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pix = await axios.get('http://177.44.248.30/v1/pix');
        res.json(pix.data)
    } catch (error) {
        console.log("Erro no pix" + error)
    }
})


app.get('/pix/:userId/:type', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId;
        // console.log(userId);
        const type = req.params.type
        // console.log(type);

        const pix = await axios.get(`http://177.44.248.30/v1/pix/${userId}/${type}`);

        res.json(pix.data)
    } catch (error) {

        console.log("Erro no /pix/:userId/:type" + error)
    }
})

app.post('/pix', async (req: Request, res: Response, next: NextFunction) => {
    try {

        const senderId = await req.body.senderId;
        const recepienId = await req.body.recepienId;
        const value = await req.body.value;

        const pix = await axios.post(`http://177.44.248.30/v1/pix/`, {
            senderId: senderId,
            recepienId: recepienId,
            value: value,
        });

        const log = {
            
            action: "Create Pix",
            value: value,
            senderId: senderId,
            recepienId: recepienId
        }
        
        await LogModel.create(log);

        res.json(pix.data)

    } catch (error) {
        console.log("Erro no /pix/:userId/:type" + error)
    }
})


app.listen(PORT, function () {
    try {
        console.log(`server is listening on http://localhost:${PORT}`);
    } catch (error) {
        console.error(error + "Erro");

    }
});

