import mongoose, {Schema, Document} from 'mongoose'

export interface UserDocument extends Document {
    email: string;
    password: string;
    createdAt: Date;
}

export const userSchema = new Schema<UserDocument>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const userModel = mongoose.model<UserDocument>('user', userSchema);
export default userModel;


