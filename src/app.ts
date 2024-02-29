import express, { Application, json } from "express";
import cors from 'cors'
import helmet from "helmet";
import "express-async-errors";

export const app: Application = express();
app.use(cors());

app.use(helmet());
app.use(json());
