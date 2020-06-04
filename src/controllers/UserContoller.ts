import { Request, Response, Router } from 'express';

import User from '../shared/schema/User';

class UserController {

    public async getByUrl(req: Request, res: Response): Promise<Response> {
        const user = await User.findOne({ username: req.params.username });
        res.status(200);
        return res.json(user);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const users = await User.find();
        res.status(200);
        return res.json(users);
    }

    public async findByName(req: Request, res:Response): Promise<Response>{
        const user = await User.find({nome: {$regex: req.params.nome}});
        res.status(200);
        return res.json(user);
    }

    public async store(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body);
        res.status(201);
        return res.json(user);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { username } = req.params;
        const user = await User.findOneAndUpdate({ username }, req.body, { new: true });
        res.status(200);
        return res.json(user);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { username } = req.params;
        await User.findOneAndDelete({ username });
        return res.status(200);
    }
    
    public async deleteByEntity(req: Request, res: Response): Promise<Response> {
        const { username } = req.body;
        await User.findOneAndDelete({ username });
        return res.status(200);
    }
}

export default new UserController();