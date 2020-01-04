import { Request, Response, Router } from 'express';

class PostsRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    //Todas as rotas dos Posts
    routes() {
        this.router.get('/:url', this.getPostByUrl);
        this.router.get('/', this.listPost);
        this.router.post('/', this.createPost);
        this.router.put('/:url', this.updatePost);
        this.router.delete('/:url', this.deletePost);
    }

    getPostByUrl() {

    }

    listPost(req: Request, res: Response) {
        res.send('List of posts!');
    }

    createPost() {

    }

    updatePost() {

    }

    deletePost() {

    }

}

const postRoutes = new PostsRoutes();
export default postRoutes.router;