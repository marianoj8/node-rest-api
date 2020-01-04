import { Document } from 'mongoose';

interface IPost extends Document {
    titulo: string,
    url: string,
    conteudo: string,
    imagem?: string
}