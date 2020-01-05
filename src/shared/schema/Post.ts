import { Schema, model } from 'mongoose';

import { IPost } from '../model/IPost';

const PostSchema = new Schema({
    titulo: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true },
    conteudo: { type: String, required: true },
    imagem: String,
    //As linhas abaixo relacionam o Post com o User...
    user: {
        type: Schema.Types.ObjectId, //Pegando o ObjectId do Schema do User
        ref: 'User',
        required: true
    }
}, {
    timestamps: true // é o mesmo que createdAt e updatedAt no objeto acima...
});

export default model<IPost>('Post', PostSchema);