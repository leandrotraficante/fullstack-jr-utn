import express from 'express';
import createTest from '../controllers/test.controllers.js';

const testRouter = express.Router();

testRouter.get('/', createTest);

export default testRouter;
