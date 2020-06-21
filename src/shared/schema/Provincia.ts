import { IProvincia } from '../model/IProvincia';
import { Schema, model } from "mongoose";

const provinciaSchema = new Schema({
    nome:{type:String, required:true}
},{
    timestamps:true
});

export default model<IProvincia>('Provincia', provinciaSchema);