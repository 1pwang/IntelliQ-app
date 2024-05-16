import {UserService} from "@/services/userService";

export class UserRegistration {
    constructor(private userService: UserService) {
    }

    async signUp(email: string, password: string) {
        await this.userService.signUp(email, password)
    }
}