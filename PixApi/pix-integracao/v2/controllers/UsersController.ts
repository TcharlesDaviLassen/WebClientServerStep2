import axios from 'axios';
import { Request, Response } from 'express';

class UsersController {

    index = async (req: Request, res: Response) => {
        try {
            const users = await axios.get(`${process.env.BANK_API_REQUESTS}/users/`);
            res.json(users.data);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }

    }

}

module.exports = new UsersController();
