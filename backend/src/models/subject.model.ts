import mongoose, {Schema, Document} from 'mongoose'

export interface SubjectDocument extends Document {
    subject: string;
    module: string;
    topic: string;
    dueDate: Date;
    createdAt: Date;
}

export const subjectSchema = new Schema<SubjectDocument>({
    subject: { type: String, required: true },
    module: { type: String, required: false },
    topic: { type: String, required: false },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now}
});

const subjectModel = mongoose.model<SubjectDocument>('subject', subjectSchema);
export default subjectModel;


