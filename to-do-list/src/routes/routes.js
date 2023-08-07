import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = Router();

routes.post('/create', new TaskController().create);
routes.get('/', new TaskController().getAll);
routes.get('/find-by-id/:id/:method', new TaskController().findById);
routes.post('/update/:id', new TaskController().update);
routes.get('/delete-task/:id', new TaskController().deleteTask);
routes.get('/task-check/:id', new TaskController().taskCheck);

export default routes;