import { Router } from 'express';

import { CreateUserController } from '../controllers/User/CreateUserController';

const userRoutes = Router();

userRoutes.post('/', CreateUserController.handle);

export { userRoutes };
