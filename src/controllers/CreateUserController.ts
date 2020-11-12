import {Request, Response} from 'express';
import {UserRepository} from "../db/repositories/UserRepository";
import {getCustomRepository} from "typeorm";

const CreateUser = async (request: Request, response: Response) => {
    const { name } = request.body;
    const userRepository = getCustomRepository(UserRepository);
    const newUser = userRepository.create();
    newUser.name = name;
    await userRepository.save(newUser);

    response.json({ newUser });
}

export default CreateUser;


