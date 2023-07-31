import express from 'express';
import * as dotenv from "dotenv";
import routes from './routes/routes.js';
import connectToDb from './database/db.js';
import path, { dirname } from 'path';

dotenv.config();
connectToDb();

const app = express();
const port = process.env.PORT || 3001;

app.set("view engine", "ejs");
app.set('views', path.join(dirname(''), 'src', 'views'));

app.use(express.static(path.join(dirname(''), 'src', 'public')));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor rodando na porta ${port}`)
);
