import express from 'express';
import { createUserController } from '../../application/controller/create-user.controller';
import { getUserController } from '../../application/controller/get-user.controller';

const router = express.Router();

router.post('/users', createUserController());
router.get('/users/:id', getUserController());

export default router;