import express from 'express';
import * as userController from '../controller/userController.js';

const user_route = express();

user_route.get('/signin',  userController.readUser);
user_route.post('/signup', userController.createUser);

export default user_route;