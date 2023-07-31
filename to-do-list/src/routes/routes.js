import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = Router();

routes.post('/create', new TaskController().create);

export default routes;
