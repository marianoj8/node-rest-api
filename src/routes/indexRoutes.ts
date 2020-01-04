import { Request, Response, Router } from 'express';

class IndexRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routers(); // Invocando o metodo routers
    }

    routers(){
        this.router.get(('/'), (req, res) => res.send('Hello, world from REST API with Node!!'));
    }    
}