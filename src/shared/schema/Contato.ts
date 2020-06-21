import { IContato } from './../model/IContato';
import { Schema, model } from 'mongoose';

const ContatoSchema = new Schema({
    fone: { type: String, required: true },
    email: { type: String, required: true }
},{
    timestamps:true
});

export default model<IContato>('Contato', ContatoSchema);