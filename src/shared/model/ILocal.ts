import { Document } from 'mongoose';
import { IMunicipio } from './IMunicipio';
import { IProvincia } from './IProvincia';

export interface ILocal extends Document{
    distrito:string;
    municipio:IMunicipio;
}