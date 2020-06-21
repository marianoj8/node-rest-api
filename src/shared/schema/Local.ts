import { ILocal } from './../model/ILocal';
import { Schema, model } from "mongoose";

const localSchema = new Schema({
    distrito: { type: String, required: true },
    municipio: {
        type: Schema.Types.ObjectId,
        ref: 'Municipio',
        required: true
    },
    provincia:{
        type: Schema.Types.ObjectId,
        ref:'Provincia',
        required:true
    }
}, {
    timestamps: true
});

export default model<ILocal>('Local', localSchema);