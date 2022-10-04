const routerPix = require('express').Router();
const pixController = require('../controllers/PixController');

routerPix.get("/pix", pixController.index);
routerPix.get("/pix/:userId/:type", pixController.show);
routerPix.post("/pix", pixController.create);

module.exports = routerPix;
