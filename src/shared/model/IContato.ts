import { Document } from 'mongoose';

export interface IContato extends Document{
    fone:string;
    email:string;
}