import "reflect-metadata"; 
import express, { Application, json } from "express";
import cors from 'cors'
import helmet from "helmet";
import "express-async-errors";
import { router } from "./routes";
import { handleErrors } from "./middlewares";

export const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(json());

app.use("/cars", router)

app.use(handleErrors)