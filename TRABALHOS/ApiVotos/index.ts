import * as dotenv from "dotenv";
dotenv.config();

// import('./db/indexDB');

import express, { Express, NextFunction, Request, Response } from 'express';
import routes from './router';

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    const date = new Date();
    console.log('[' + (date.getDate() +" " 
                    + (date.getMonth()+ 1) + " " 
                    + date.getFullYear()) +  " " 
                    + date.getHours() + ":" 
                    + date.getMinutes() + '] ' 
                    + req.method + ' '
                    + req.url);
    next();
});

app.use(routes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Dados não encontrados' });
});

app.listen(PORT, () => {
    console.log(`Server started at  http://localhost:${PORT}/`);
});
