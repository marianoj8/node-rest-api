import { Request, Response, Router } from 'express';

import Post from '../shared/schema/Post';

class PostsRoutes {

    public router: Router;

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

    public async getPostByUrl(req: Request, res: Response): Promise<Response> {
        const post = await Post.findOne({ url: req.params.url }).populate('user');
        return res.json(post);
    }

    public async listPost(req: Request, res: Response): Promise<Response> {
        const post = await Post.find().populate('user');
        return res.json(post);
    }

    public async createPost(req: Request, res: Response): Promise<Response> {
        const post = await Post.create(req.body);
        return res.json(post);
    }

    public async updatePost(req: Request, res: Response): Promise<Response> {
        const { url } = req.params;
        const post = Post.findOneAndUpdate({ url }, req.body, { new: true });
        return res.json(post);
    }

    public async deletePost(req: Request, res: Response): Promise<void> {
        const { url } = req.params;
        await Post.findOneAndDelete({ url });
    }

}

const postRoutes = new PostsRoutes();
export default postRoutes.router;