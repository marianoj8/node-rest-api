import { IGrupo } from './../model/IGrupo';
import { Schema, model } from 'mongoose';
const GrupoSchema = new Schema({
    
    sigla: { type: String },
    nome: { type: String, required: true },
    grupoType: {
        type: Schema.Types.ObjectId,
        ref: 'GrupoType',
        required: true,
    },
    contato: {
        type: Schema.Types.ObjectId,
        ref: 'Contato',
        required: true,
    },
    local: {
        type: Schema.Types.ObjectId,
        ref: 'Local',
        required: true,
    },
    status: { type: Boolean },
    lat: { type: String, required: true },
    lon: { type: String, required: true },
},{
    timestamps: true,
});

export default model<IGrupo>("Grupo", GrupoSchema);
