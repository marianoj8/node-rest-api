import express from 'express';
import morgan from 'morgan';

class Server {

    private app: express.Application;

    constructor() {
        //Inicializando a applicacao exprecess.
        this.app = express();
        this.config(); //setando configuracoes.
    }


    // Configuração do servidor
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
    }

    // Onde serão definido as rotas
    routes() {

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