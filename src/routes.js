import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello world' }));
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.get);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
