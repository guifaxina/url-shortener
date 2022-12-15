import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres", 
  "postgres", 
  "postgres", 
  {
  dialect: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: 5432
  }
);

export default sequelize
