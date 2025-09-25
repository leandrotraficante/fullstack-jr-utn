import express from 'express';
import { getAllUsers, getUserById, updateUserById, deleteUserById } from '../controllers/user.controller.js';
import authMiddleware from '../middleware/auth.token.js';

const userRouter = express.Router();

userRouter.get('/', authMiddleware, getAllUsers);
userRouter.get('/:id', authMiddleware, getUserById);
userRouter.put('/:id', authMiddleware, updateUserById);
userRouter.delete('/:id', authMiddleware, deleteUserById);

export default userRouter;