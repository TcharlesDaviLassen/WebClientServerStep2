import axios from 'axios';
import { Request, Response } from 'express';

export class UsersController {

    static index(arg0: string, index: any) {

        async (req: Request, res: Response) => {

            try {
                const users = await axios.get(`${process.env.BANK_API_REQUESTS}/users/`);
                res.json(users.data);
            } catch (error) {
                res.status(400).json({ error: (error as Error).message });
            }
        }

        throw new Error("Method not implemented.");
    }

}