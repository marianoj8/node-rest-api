import { Schema, model } from 'mongoose';

import { IUser } from '../model/IUser';

const UserSchema = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: String
}, {
    timestamps: true
});

export default model<IUser>('User', UserSchema);