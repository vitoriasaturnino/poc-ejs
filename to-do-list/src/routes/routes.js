import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';

const routes = Router();

routes.post('/create', new TaskController().create);
routes.get('/', new TaskController().getAll);
routes.get('/find-by-id/:id/:method', new TaskController().findById);
routes.post('/update/:id', new TaskController().update);
// routes.post('/delete/:id', new TaskController().delete);

export default routes;
