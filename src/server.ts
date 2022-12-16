import express from "express";
import router from "./routes/uri.js";
import database from "./db/db-config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.listen(PORT, async () => {
  await database.sync();
  console.log(`Server connected on port ${PORT}`);
});
