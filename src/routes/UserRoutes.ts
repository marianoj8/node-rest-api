import { Request, Response, Router } from 'express';

import User from '../shared/schema/User';

class UserRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    //Todas as rotas dos User
    routes() {
        this.router.get('/:username', this.getUserByUrl);
        this.router.get('/', this.listUser);
        this.router.post('/', this.createUser);
        this.router.put('/:username', this.updateUser);
        this.router.delete('/:username', this.deleteUser);
    }

    public async getUserByUrl(req: Request, res: Response): Promise<Response> {
        const user = await User.findOne({ username: req.params.username });
        return res.json(user);
    }

    public async listUser(req: Request, res: Response): Promise<Response> {
        const user = await User.find();
        return res.json(user);
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body);
        return res.json(user).status(201);
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        const { username } = req.params;
        const user = User.findOneAndUpdate({ username }, req.body, { new: true });
        return res.json(user);
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const { username } = req.params;
        await User.findOneAndDelete({ username });
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;