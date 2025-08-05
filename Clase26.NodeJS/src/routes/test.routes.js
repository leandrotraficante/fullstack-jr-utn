import express from 'express';
import createTest from '../controllers/test.controller.js';

const testRouter = express.Router();

testRouter.get('/', createTest);

export default testRouter;
