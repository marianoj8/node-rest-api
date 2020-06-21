import { ILocal } from './ILocal';
import { IContato } from './IContato';
import { IGrupoType } from './IGrupoType';
import { Document } from 'mongoose';

export interface IGrupo extends Document {
    sigla:string;
    nome:string;
    grupoType:IGrupoType;
    contato:IContato;
    local:ILocal;
    status:boolean;
    lat:string;
    lon:string;
} 