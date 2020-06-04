import { Router } from 'express';
import { check, validationResult } from 'express-validator';

import UserContoller from './controllers/UserContoller';
import PostsController from './controllers/PostsController';

const routes = Router();

//Todas as rotas do controlador UserController
routes.get('/user/:username', UserContoller.getByUrl);
routes.get('/user', UserContoller.list);
routes.get('/user/n/:nome', UserContoller.findByName);
routes.post('/user', [], UserContoller.store);
routes.put('/user/:username', UserContoller.update);
routes.delete('/user/:username', UserContoller.delete);
routes.delete('/user', UserContoller.deleteByEntity);

//Todas as rotas dos Posts
routes.get('/post/:url', PostsController.getByUrl);
routes.get('/post', PostsController.list);
routes.post('/post', PostsController.store);
routes.put('/post/:url', PostsController.update);
routes.delete('/post/:url', PostsController.delete);
routes.delete('/post', PostsController.deleteByEntity);

export default routes;