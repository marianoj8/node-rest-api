import { Request, Response, Router } from 'express';
import Municipio, { } from '../shared/schema/Municipio';

class MunicipioController {

    public async getById(req: Request, res: Response): Promise<Response> {
        const municipio = await Municipio.findOne({ id: req.params.id });
        res.status(200);
        return res.json(municipio);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const municipio = await Municipio.find({}).populate('provincia');
        res.status(200);
        return res.json(municipio);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        const municipio = await Municipio.create(req.body);
        res.status(200);
        return res.json(municipio);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.id;
        const municipio = await Municipio.findByIdAndUpdate({ id }, req.body, { new: true });
        res.status(200);
        return res.json(municipio);
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        Municipio.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const id = req.body.id;
        Municipio.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

 export default new  MunicipioController();