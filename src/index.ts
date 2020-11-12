import "reflect-metadata";
import {createConnection, ConnectionOptions} from "typeorm";
import http from "http";
import express from 'express';

import config from "../ormconfig.json";
import GetAllUsers from "./controllers/GetAllUsers";
import CreateUser from "./controllers/CreateUserController";

createConnection(config as ConnectionOptions).then(async connection => {
    const app = express();
    app.use(express.json());
    const server = new http.Server(app);
    server.listen(3001);

    app.get('/users/all', GetAllUsers);
    app.post('/users/create', CreateUser);
}).catch(error => {
    console.log(error);
})

