import userModel, {UserDocument, userSchema} from "../models/user.model";
import mongoose, {Model} from "mongoose";
import UserModel from "../models/user.model";

export class UserRepository {
    private userModel: Model<UserDocument>
    constructor() {
        this.userModel = userModel;
    }

    async signIn(){

    }

    async signUp(email: string, password: string){
        try {
            const newUser = new UserModel({email, password});
            const savedUser = await newUser.save();

            return savedUser;
        } catch (error){
            throw new Error( `Failed to signup user`)
        }
        }

    async getUsers(){
        try {
            const users = await UserModel.find();
            return users;
        } catch (error){
            throw new Error('Unable to retrieve users')
        }
        }

    async signOut(){

    }
}