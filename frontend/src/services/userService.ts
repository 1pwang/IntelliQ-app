import axios from 'axios';
export class UserService {
    constructor() {
    }

    async signUp(email: string, password: string) {
        try {
           const response = await axios.post('http://localhost:3000/api/signup', {email, password})
            return response.data;
        } catch (error) {
            throw new Error('Unable to sign up')
        }
    }
}