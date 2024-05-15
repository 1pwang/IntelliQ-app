import express from 'express'
const router = express.Router();
import { UserController } from '../controller/user.controller';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post('/signup', async (req, res) => {
    userController.signUp(req, res)
})
router.get('/getusers', async (req, res) => {
    userController.getUsers(req, res)
})

export default router;