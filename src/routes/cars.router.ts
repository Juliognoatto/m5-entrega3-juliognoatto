import { Router } from "express";
import { CarsController } from "../controllers";
import { ensure } from "../middlewares";
import { carCreateSchema, carUpdateSchema } from "../schemas";


export const router = Router();
const controller = new CarsController();

router.post(
  "", 
  ensure.validBody(carCreateSchema), 
  controller.create
  )
router.get(
  "", 
  controller.read
  )
router.get(
  "/:id", 
  controller.readById
  )
router.patch(
  "/:id", 
  ensure.validBody(carUpdateSchema), 
  controller.update
  )
router.delete(
  "/:id", 
  controller.delete
  )