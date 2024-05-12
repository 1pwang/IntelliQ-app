import userModel, {UserDocument, userSchema} from "../models/user.model";
import mongoose, {Model} from "mongoose";

export class UserRepository {
    private userModel: Model<UserDocument>
    constructor() {
        this.userModel = userModel;
    }

    async signIn(){

    }

    async signUp(email: string, password: string){
        try {
            if(email){
                await this.userModel.create({email});
                throw new Error('User already exists');
            }
            const newUser = await this.userModel.create(email);
            const savedUser = newUser.save;

            return savedUser;
        } catch (error){
            throw new Error( `Failed to signup user`)
        }
        }

    async signOut(){

    }
}