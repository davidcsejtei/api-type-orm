import {Request, Response} from 'express';
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../db/repositories/UserRepository";

const GetAllUsers = async (request: Request, response: Response) => {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    response.json({ users });
}

export default GetAllUsers;
