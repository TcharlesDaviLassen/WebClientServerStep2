import { Request, Response } from 'express';
const Logs = require('../model/Votos');


class VoteController {

    index = async (req: Request, res: Response) => {
        try {
            res.json(await Logs.findAll());
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }


    create = async (req: Request, res: Response) => {

        try {
            const data = await (req.body);
            res.json(await Logs.create(data));
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }

    }
}

module.exports = new VoteController();
