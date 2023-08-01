import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = Router();

routes.post('/', new TaskController().create);
routes.get('/', new TaskController().getAll);

export default routes;
