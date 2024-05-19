import express from 'express'
const userRouter = express.Router();
import { UserController } from '../controller/user.controller';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.post('/signup', async (req, res) => {
    userController.signUp(req, res)
})
userRouter.get('/getusers', async (req, res) => {
    userController.getUsers(req, res)
})

export default userRouter;