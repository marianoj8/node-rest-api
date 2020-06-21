import { IMunicipio } from './../model/IMunicipio';
import { Schema, model } from 'mongoose';

const municipioSchema = new Schema({
    nome: { type: String, required: true }
}, {
    timestamps: true
});

export default model<IMunicipio>('Municipio', municipioSchema);