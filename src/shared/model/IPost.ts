import { Document } from 'mongoose';

import { IUser } from './IUser';

export interface IPost extends Document {
    titulo: string,
    url: string,
    conteudo: string,
    imagem?: string,
    user: IUser
}
