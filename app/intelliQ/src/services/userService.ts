import { AxiosInstance } from 'axios';
export class UserService {
    private http: AxiosInstance;
    constructor(http: AxiosInstance) {
        this.http = http;
    }

    async signUp(email: string, password: string) {
        try {
           const response = await this.http.post('/api/signup', {email, password})
            return response.data;
        } catch (error) {
            throw new Error('Unable to sign up')
        }
    }
}