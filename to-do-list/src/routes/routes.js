import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = Router();

routes.get('/', TaskController.getAll);

export default routes;
