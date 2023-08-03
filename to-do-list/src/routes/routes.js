import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = Router();

routes.post('/create', new TaskController().create);
routes.get('/', new TaskController().getAll);
routes.get('/find-by-id/:id', new TaskController().findById);

export default routes;
