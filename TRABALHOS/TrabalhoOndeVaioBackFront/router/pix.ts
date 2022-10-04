import { Router } from 'express';
const routerPix = Router();

import { PixController } from '../controller/PixController';

export function pix() {

    routerPix.get("/pix", PixController.index);
    routerPix.get("/pix/:userId/:type", PixController.show);
    routerPix.post("/pix", PixController.create);

}

