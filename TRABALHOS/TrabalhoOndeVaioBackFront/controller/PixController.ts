import axios from 'axios';
import { Request, Response } from 'express';
import { Logs } from '../model/Logs';

export class PixController {

    static index = async (req: Request, res: Response) => {
        try {
            const users = await axios.get(`${process.env.BANK_API_REQUESTS}/pix/`);
            res.json(users.data);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    static show = async (req: Request, res: Response) => {
        try {
            const userId = req.params.userId;
            const type = req.params.type;
            const pix = await axios.get(`${process.env.BANK_API_REQUESTS}/pix/${userId}/${type}`);
            res.json(pix.data);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }

    }

    static create = async (req: Request, res: Response) => {
        try {
            const value = req.body.value;
            const recipientId = req.body.recipientId;
            const senderId = req.body.senderId;

            const pix = await axios.post(`${process.env.BANK_API_REQUESTS}/pix/`, {
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

            await Logs.create(log);

            res.json(pix.data);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

}
