import {SubjectRepository} from "../repository/subject.repository";

export class SubjectService {
    constructor(private subjectRepository: SubjectRepository) {
    }

    async createSubjectCard(subject: string, module: string, topic: string, dueDate: Date){
        return await this.subjectRepository.createSubjectCard(subject, module, topic, dueDate);
    }
    async retrieveSubjectCard(){
        return await this.subjectRepository.retrieveSubjectCard();
    }
}