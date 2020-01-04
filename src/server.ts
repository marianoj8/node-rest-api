import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors'; 

import indexRoutes from './routes/indexRoutes';

class Server {

    private app: express.Application;

    constructor() {
        //Inicializando a applicacao exprecess.
        this.app = express();
        this.config(); //setando configuracoes.
        this.routes(); // setando rotas.
    }


    // Configuração do servidor
    config() {
        //Connecting to MongoDB
        const MONGO_URI = 'mongodb://localhost/noderestapi';
        mongoose.set('useFindAndModify', false);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        
        // Settings
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(compression());
    }

    // Onde serão definido as rotas
    routes() {
        this.app.use(indexRoutes);
    }

    //Inicialização do servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Running on port: ${this.app.get('port')}`)
        });
    }
}

const server = new Server();
server.start();