import { Request, Response, Router } from 'express';
import Provincia, { } from '../shared/schema/Provincia';

class ProvinciaController {

    public async getById(req: Request, res: Response): Promise<Response> {
        const provincia = await Provincia.findOne({ id: req.params.id });
        res.status(200);
        return res.json(provincia);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const provincia = await Provincia.find({});
        res.status(200);
        return res.json(provincia);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        const provincia = await Provincia.create(req.body);
        res.status(200);
        return res.json(provincia);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.id;
        const provincia = await Provincia.findByIdAndUpdate({ id }, req.body, { new: true });
        res.status(200);
        return res.json(provincia);
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        Provincia.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const id = req.body.id;
        Provincia.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

 export default new  ProvinciaController();