import timerModel, {TimerDocument} from "../models/timer.model";
import {Model} from "mongoose";

export class TimerRepository {
    private timerModel: Model<TimerDocument>;
    constructor() {
        this.timerModel = timerModel;
    }

    async addSubjectTime(subject: string, timer: string, dueDate: Date) {
        try {
            const subjectTime = new this.timerModel({ subject, timer, dueDate })
            const savedSubjectTime = subjectTime.save();
            return savedSubjectTime;
        } catch (error) {
            throw new Error('Failed to save subject timer');
        }

    }
}