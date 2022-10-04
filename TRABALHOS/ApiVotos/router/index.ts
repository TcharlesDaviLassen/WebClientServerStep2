const router = require('express').Router();
import cors from 'cors';

const votos = require('./votosRouter');

router.use(cors());

router.use(votos);

export default router;