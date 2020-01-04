import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    titulo: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true },
    conteudo: { type: String, required: true },
    imagem: String
}, {
    timestamps: true // é o mesmo que createdAt e updatedAt no objeto acima...
});

export default model('Post', PostSchema);