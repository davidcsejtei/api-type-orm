# Node.js API using Express and TypeORM, written in TypeScript

The project demonstrates a proper configuration of an API application uses TypeORM (over a PostgreSQL database) with Express.js and written in TypeScript. For the sake of the example it has a User entity with a UserRepository and migration alongside a UserSubscriber. 

A configuration file needs to be created as a prerequisites which contains your database access information like the host, database name, username, etc.

Read the official [TypeORM documentation](https://typeorm.io/) to learn how to use entities, migrations, repositories and other tools properly.

## Set your database options in ormconfig.json
The example uses a PostgreSQL database engine but you can change that in the ormconfig.json following the [supported database drivers](https://typeorm.io/#/connection-options/common-connection-options).

## Installation

```
npm install
```

## Start

```
npm start
```
