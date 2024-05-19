import express from 'express'
const subjectRouter = express.Router();
import { SubjectController } from '../controller/subject.controller';
import { SubjectRepository } from '../repository/subject.repository';
import { SubjectService } from '../service/subject.service';

const subjectRepository = new SubjectRepository();
const subjectService = new SubjectService(subjectRepository);
const subjectController = new SubjectController(subjectService);

subjectRouter.post('/create', async (req, res) => {
    subjectController.createSubjectCard(req, res);
})

subjectRouter.get('/retrieve', (req, res) => {
    subjectController.retrieveSubjectCard(req, res);
})
export default subjectRouter;