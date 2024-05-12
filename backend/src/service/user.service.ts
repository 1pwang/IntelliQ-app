import { UserRepository } from "../repository/user.repository";

export class UserService {
    constructor(private userRepository: UserRepository) {

    }

    async signUp(email: string, password: string){
       return await this.userRepository.signUp(email, password)
    }
}