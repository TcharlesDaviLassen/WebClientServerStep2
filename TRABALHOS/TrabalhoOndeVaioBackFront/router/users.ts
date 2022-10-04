import { Router } from "express";
const routerUser = Router();

import { UsersController } from '../controller/UsersController';

export const users = routerUser.get('/users', UsersController.index);
