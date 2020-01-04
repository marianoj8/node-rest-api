import { Schema, model } from 'mongoose';

const PostSchema = new Schema({
    titulo: { type: String, required: true },
    url: { type: String, required: true, unique: true, lowercase: true},
    conteudo: { type: String, required: true },
    imagem: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});
