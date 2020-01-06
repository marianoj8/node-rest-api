import { Request, Response, Router } from 'express';

import Post from '../shared/schema/Post';

class PostsController {

    public async getByUrl(req: Request, res: Response): Promise<Response> {
        const post = await Post.findOne({ url: req.params.url }).populate('user');
        res.status(200);
        return res.json(post);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const posts = await Post.find().populate('user');
        res.status(200);
        return res.json(posts);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const post = await Post.create(req.body);
        res.status(201);
        return res.json(post);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { url } = req.params;
        const post = await Post.findOneAndUpdate({ url }, req.body, { new: true });
        res.status(200);
        return res.json(post);
    }

    public delete(req: Request, res: Response) {
        const { url } = req.params;
        Post.findOneAndDelete({ url })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const url = req.body.url;
        Post.findOneAndDelete({ url })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

export default new PostsController();