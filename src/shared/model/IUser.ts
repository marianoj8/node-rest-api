import { Document } from 'mongoose';

export interface IUser extends Document {

    nome: string;
    email: string;
    username: string;
    password: string
}