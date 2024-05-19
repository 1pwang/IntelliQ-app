import {SubjectService} from "../service/subject.service";

export class SubjectController {
    constructor(private subjectService: SubjectService) {
    }

    async createSubjectCard(req: any, res: any){
        const { subject, module, topic, dueDate } = req.body;
        try{
            const subjectCard = await this.subjectService.createSubjectCard(subject, module, topic, dueDate);
            res.status(201).json(subjectCard);
        } catch (error) {
            res.status(500).json({Error: 'Error retrieving created subject card'})
        }

    }

    async retrieveSubjectCard(req: any, res: any){
        try{
            const subjectCard = await this.subjectService.retrieveSubjectCard();
            res.status(201).json(subjectCard);
        } catch (error) {
            res.status(500).json({Error: 'Error retrieving subject card'})
        }

    }
}