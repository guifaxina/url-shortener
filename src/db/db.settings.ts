import { Sequelize } from "sequelize";

const sequelize = new Sequelize("urlshortener", "postgres", "postgres", {
  dialect: "postgres",
  host: "localhost",
});

export default sequelize
