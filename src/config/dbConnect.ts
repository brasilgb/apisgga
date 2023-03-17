import 'dotenv/config';
import { Sequelize, Dialect } from "sequelize";

const dbDatabase = process.env.DB_DATABASE as string;
const dbHostname = process.env.DB_HOSTNAME;
const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD;
const dbDriver = process.env.DB_DRIVER as Dialect;

const connection = new Sequelize( dbDatabase, dbUsername, dbPassword,{
    host: dbHostname,
    dialect: dbDriver,
    logging: false
});

export default connection;