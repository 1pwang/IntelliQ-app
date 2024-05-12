import { UserService } from '../service/user.service';
export class UserController {

    constructor(private userService: UserService){
    }

    async signUp(req: any, res: any) {
        const { email, password } = req.body

        try {
            if(!email){
                throw new Error('No email defined');
            }
            return await this.userService.signUp(email, password)
        } catch (error){
            res.status(500)
        }
    }
}