import { Router } from "express";
import { CarsController } from "../controllers";


export const router = Router();
const controller = new CarsController();

router.post("", controller.create)
router.get("", controller.read)