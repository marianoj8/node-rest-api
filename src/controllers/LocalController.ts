import { Request, Response, Router } from 'express';
import Local, { } from '../shared/schema/Local';

class LocalController {

    public async getById(req: Request, res: Response): Promise<Response> {
        const local = await Local.findOne({ id: req.params.id }).populate(['municipio','provincia']);
        res.status(200);
        return res.json(local);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const local = await Local.find({}).populate(['municipio','provincia']);
        res.status(200);
        return res.json(local);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        const local = await Local.create(req.body);
        res.status(200);
        return res.json(local);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.id;
        const local = await Local.findByIdAndUpdate({ id }, req.body, { new: true });
        res.status(200);
        return res.json(local);
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        Local.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const id = req.body.id;
        Local.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

 export default new  LocalController();