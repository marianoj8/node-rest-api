import { IProvincia } from './IProvincia';
import { Document } from 'mongoose';

export interface IMunicipio extends Document {
    nome: string;
    provincia: IProvincia;
}
