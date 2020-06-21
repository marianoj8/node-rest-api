import { Router } from 'express';

import UserContoller from './controllers/UserContoller';
import ProvinciaController from './controllers/ProvinciaController';
import MunicipioController from './controllers/MunicipioController';
import ContatoController from './controllers/ContatoController';
import LocalController from './controllers/LocalController';
import GrupoTypeController from './controllers/GrupoTypeController';
import GrupoController from './controllers/GrupoController';


const routes = Router();

//Todas as rotas do controlador UserController
routes.get('/user/:username', UserContoller.getByUrl);
routes.get('/user', UserContoller.list);
routes.get('/user/n/:nome', UserContoller.findByName);
routes.post('/user', [], UserContoller.store);
routes.put('/user/:username', UserContoller.update);
routes.delete('/user/:username', UserContoller.delete);
routes.delete('/user', UserContoller.deleteByEntity);

//Todas as rotas de Grupo
routes.get('/grupo/:url', GrupoController.getById);
routes.get('/grupo', GrupoController.list);
routes.post('/grupo', GrupoController.save);
routes.put('/grupo/:url', GrupoController.update);
routes.delete('/grupo/:url', GrupoController.delete);
routes.delete('/grupo', GrupoController.deleteByEntity);

//Todas as rotas de GrupoType
routes.get('/gtype/:url', GrupoTypeController.getById);
routes.get('/gtype', GrupoTypeController.list);
routes.post('/gtype', GrupoTypeController.save);
routes.put('/gtype/:url', GrupoTypeController.update);
routes.delete('/gtype/:url', GrupoTypeController.delete);
routes.delete('/gtype', GrupoTypeController.deleteByEntity);

//Todas as rotas de Contato
routes.get('/contato/:url', ContatoController.getById);
routes.get('/contato', ContatoController.list);
routes.post('/contato', ContatoController.save);
routes.put('/contato/:url', ContatoController.update);
routes.delete('/contato/:url', ContatoController.delete);
routes.delete('/contato', ContatoController.deleteByEntity);

//Todas as rotas de Local
routes.get('/local/:url', LocalController.getById);
routes.get('/local', LocalController.list);
routes.post('/local', LocalController.save);
routes.put('/local/:url', LocalController.update);
routes.delete('/local/:url', LocalController.delete);
routes.delete('/local', LocalController.deleteByEntity);


//Todas as rotas de Municipio
routes.get('/municipio/:url', MunicipioController.getById);
routes.get('/municipio', MunicipioController.list);
routes.post('/municipio', MunicipioController.save);
routes.put('/municipio/:url', MunicipioController.update);
routes.delete('/municipio/:url', MunicipioController.delete);
routes.delete('/municipio', MunicipioController.deleteByEntity);


//Todas as rotas de Provincia
routes.get('/provincia/:url', ProvinciaController.getById);
routes.get('/provincia', ProvinciaController.list);
routes.post('/provincia', ProvinciaController.save);
routes.put('/provincia/:url', ProvinciaController.update);
routes.delete('/provincia/:url', ProvinciaController.delete);
routes.delete('/provincia', ProvinciaController.deleteByEntity);

export default routes;