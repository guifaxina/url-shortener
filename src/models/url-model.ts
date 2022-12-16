import { DataTypes } from "sequelize";
import database from "../db/db-config.js";

const urlModel = database.define("Url", {
  shortUrl: {
    type: DataTypes.STRING,
  },
  longUrl: {
    type: DataTypes.STRING,
  },
});

export default urlModel;
