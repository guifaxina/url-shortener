import express from "express";
import router from "./routes/uri.js";
import bodyParser from "body-parser";
// Database
import database from "./db/db.settings.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, async () => {
  await database.sync();
  console.log(`Server connected on port ${PORT}`);
});
