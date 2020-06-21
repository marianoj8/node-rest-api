import { Schema, model } from "mongoose";
import { IGrupoType } from "../model/IGrupoType";

const grupoTypeSchema = new Schema({
    descricao: { type: String, required: true }
}, {
    timestamps: true
});

export default model<IGrupoType>('GrupoType', grupoTypeSchema)