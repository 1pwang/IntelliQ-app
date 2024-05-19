import subjectModel, { SubjectDocument } from "../models/subject.model";
import { Model } from "mongoose";

export class SubjectRepository {
    private subjectModel: Model<SubjectDocument>;

    constructor() {
        this.subjectModel = subjectModel;
    }

    async createSubjectCard(subject: string, module: string, topic: string, dueDate: Date) {
        try {
            const subjectCard = new this.subjectModel({ subject, module, topic, dueDate });
            const savedCard = await subjectCard.save();
            return savedCard;
        } catch (error) {
            throw new Error('Failed to create new subject card in database');
        }
    }

    async retrieveSubjectCard() {
        try {
            const subjectCard = await this.subjectModel.find();
            return subjectCard;
        } catch (error) {
            throw new Error('Error retrieving subject card from database');
        }
    }
}
