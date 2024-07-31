import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'metropole_garage',
    username: 'root',
    host: 'localhost',
    port: 3306,
    logging: false
}) 