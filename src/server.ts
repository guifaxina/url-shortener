import express from "express";
import router from "./routes/uri.js";
import database from "./databases/pg-config.js";
import redis from "./databases/redis-config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

(async () => {
  await redis.connect();
  console.log('Redis connection established.')
  await database.sync();
  console.log('Postgres connection established.')
})();

app.listen(PORT, async () => {
  console.log(`Server running on port: ${PORT}.`);
});
