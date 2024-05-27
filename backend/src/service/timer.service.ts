import {TimerRepository} from "../repository/timer.repository";

export class TimerService {
    constructor(private timerRepository: TimerRepository) {
    }

    async addSubjectTime(subject: string, timer: string, dueDate: Date) {
        return await this.timerRepository.addSubjectTime(subject, timer, dueDate);
    }
}