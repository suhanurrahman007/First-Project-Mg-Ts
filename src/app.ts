import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors);

const getController = (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
};

app.get('/', getController);

export default app;
