import { Request, Response, Router } from 'express';

class PostsRoutes {

    router: Router;

    constructor() {
        this.router = Router();
    }

    //Todas as rotas dos Posts
    routes() {
        this.router.get('/posts', this.listPost);
    }

    getPostById() {

    }

    listPost(req: Request, res: Response) {
        res.send('List of posts!');
    }

    createPost() {

    }

    deletePost() {

    }

}