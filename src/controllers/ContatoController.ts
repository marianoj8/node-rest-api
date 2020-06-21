import { Request, Response, Router } from 'express';
import Contato, { } from '../shared/schema/Contato';

class ContatoController {

    public async getById(req: Request, res: Response): Promise<Response> {
        const contato = await Contato.findOne({ id: req.params.id });
        res.status(200);
        return res.json(contato);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const contato = await Contato.find({});
        res.status(200);
    return res.json(contato);
    }

    public async save(req: Request, res: Response): Promise<Response> {
        const contato = await Contato.create(req.body);
        res.status(200);
        return res.json(contato);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.body.id;
        const contato = await Contato.findByIdAndUpdate({ id }, req.body, { new: true });
        res.status(200);
        return res.json(contato);
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params;
        Contato.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

    public deleteByEntity(req: Request, res: Response) {
        const id = req.body.id;
        Contato.findOneAndDelete({ id })
            .then((data) => {
                res.sendStatus(200);
            })
            .catch(error => {
                res.sendStatus(404)
            });
    }

}

 export default new  ContatoController();