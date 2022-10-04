import { Request, Response } from "express";
import { Logs } from "../model/Logs";

class UserController {

    async findAll(req: Request, res: Response) { };

    async findOne(req: Request, res: Response) { };

    async create(req: Request, res: Response) {
        const { emissor, receptor, data } = req.body;
        const user = await Logs.create({
            emissor,
            receptor,
            data
        });
        return res.status(200).json(user)
    };

    async update(req: Request, res: Response) { };

    async destroy(req: Request, res: Response) { };
}

export default new UserController();