import { Request, Response, Router } from 'express';
import GrupoType, { } from '../shared/schema/GrupoType';

class GrupoTypeController {

    public async getById(req: Request, res: Response): Promise<Response> {
        const grupoType = await GrupoType.findOne({ id: req.params.id });
        res.status(200);
        return res.json(grupoType);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const grupoType = await GrupoType.find({});
        res.status(200);
        return res.json(grupoType);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        const grupoType = await GrupoType.create(req.body);
        res.status(200);
        return res.json(grupoType);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.id;
        const grupoType = await GrupoType.findByIdAndUpdate({ id }, req.body, { new: true });
        res.status(200);
        return res.json(grupoType);
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        GrupoType.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const id = req.body.id;
        GrupoType.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

 export default new  GrupoTypeController();