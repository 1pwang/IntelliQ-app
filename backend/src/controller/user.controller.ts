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
            const newUser = await this.userService.signUp(email, password)
            res.status(201).json(newUser);
        } catch (error){
            res.status(500).json({Error: 'Unable to save user'})
        }
    }

    async getUsers(req: any, res: any){
        try {
            const allUsers = await this.userService.getUsers();
            res.status(201).json(allUsers);
        } catch (error) {
            res.status(500)
        }
    }
}