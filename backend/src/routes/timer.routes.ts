import express from 'express'
const timerRouter = express.Router();
import { TimerController } from '../controller/timer.controller';
import { TimerRepository } from '../repository/timer.repository';
import { TimerService } from '../service/timer.service';

const timerRepository = new TimerRepository();
const timerService = new TimerService(timerRepository);
const timerController = new TimerController(timerService);

timerRouter.post('/addtimer', async (req, res) => {
    timerController.addSubjectTime(req, res)
})

export default timerRouter;