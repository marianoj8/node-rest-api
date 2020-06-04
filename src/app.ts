import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

import routes from './routes';


class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        //Middlewares
        this.express.use(morgan('dev'));
        this.express.use(express.json()); //dando suport ao formato JSON
        this.express.use(express.urlencoded({ extended: false })); // Validacao e suporte a formularios
        this.express.use(helmet());
        this.express.use(compression());
        this.express.use(cors()); //Removendo o cors
    }

    private database(): void {
        //Connecting to MongoDB
        const MONGO_URI = 'mongodb://localhost:2717/noderestapi';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }

    private routes(): void {
        this.express.use('/api', routes);
    }
}

export default new App().express;