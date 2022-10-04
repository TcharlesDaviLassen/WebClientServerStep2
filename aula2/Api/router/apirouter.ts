import { Router } from 'express';

export const router = Router();

import { User } from '../model/dados'
const apiCoorController = require('../controllers/BoocksController');

const validateApiCoorId = async (req, res, next) => {
  const apiCoor = await User.findByPk(req.params.apiCoorId);
  if (!apiCoor) {
    return res.status(404).json({ error: 'Boocks not found' });
  }
  next();
}

router.get('/apiCoor', apiCoorController.index);

router.post('/apiCoor', apiCoorController.create);

router.get('/apiCoor/:apiCoorId', validateApiCoorId, apiCoorController.show);

router.put('/apiCoor/:apiCoorId', validateApiCoorId, apiCoorController.update);

router.delete('/apiCoor/:apiCoorId', validateApiCoorId, apiCoorController.delete);

module.exports = router;