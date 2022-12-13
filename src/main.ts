import express from 'express';
import database from './db/db.settings';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await database.sync();
  console.log(`Server connected on port ${PORT}`)
})