import {TimerService} from "../service/timer.service";

export class TimerController {
    constructor(private timerService: TimerService) {
    }

    async addSubjectTime(req: any, res: any){
        const { subject, timer, dueDate } = req.body;
        try{
            const addSubjectTime = await this.timerService.addSubjectTime(subject, timer, dueDate);
            res.status(201).json(addSubjectTime);
        } catch (error) {
            res.status(500).json({Error: 'Failed to save subject time'});
        }
    }
}