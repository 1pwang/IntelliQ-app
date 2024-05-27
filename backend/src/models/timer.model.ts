import mongoose, {Schema, Document} from 'mongoose'

export interface TimerDocument extends Document {
    subject: string;
    dueDate: Date;
    timer: string;

}

export const timerSchema = new Schema<TimerDocument>({
    subject: { type: String, required: true },
    dueDate: { type: Date, required: false },
    timer: { type: String, required: true }
});

const timerModel = mongoose.model<TimerDocument>('timer', timerSchema);
export default timerModel;


