import { Request, Response, Router } from 'express';
import Grupo, { } from '../shared/schema/Grupo';

class GrupoController {

    public async getById(req: Request, res: Response): Promise<Response> {
        const grupo = await Grupo.findOne({ id: req.params.id });
        res.status(200);
        return res.json(grupo);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const grupo = await Grupo.find({}).populate(['grupoType','contato','local']);
        res.status(200);
        return res.json(grupo);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        const grupo = await Grupo.create(req.body);
        res.status(200);
        return res.json(grupo);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.id;
        const grupo = await Grupo.findByIdAndUpdate({ id }, req.body, { new: true });
        res.status(200);
        return res.json(grupo);
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        Grupo.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const id = req.body.id;
        Grupo.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

 export default new  GrupoController();