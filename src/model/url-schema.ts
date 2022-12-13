import { DataTypes } from "sequelize";
import database from "../db/db.settings";

const urlSchema = database.define("Url", {
  shortUrl: {
    type: DataTypes.STRING,
  },
  longUrl: {
    type: DataTypes.STRING,
  },
});

export default urlSchema;
