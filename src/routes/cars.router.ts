import { Router } from "express";
import { CarsController } from "../controllers";
import { ensure } from "../middlewares";
import { carCreateSchema, carUpdateSchema } from "../schemas";
import { container } from "tsyringe";
import { CarsService } from "../services";


export const router = Router();
container.registerSingleton("CarsService", CarsService)
const controller = container.resolve(CarsController)

router.post(
  "", 
  ensure.validBody(carCreateSchema),
  (req, res) => controller.create(req, res)
  )
router.get(
  "", 
  (req, res) => controller.read(req, res)
  )
router.get(
  "/:id", 
  ensure.validCarExists,
  (req, res) => controller.readById(req, res)
  )
router.patch(
  "/:id", 
  ensure.validBody(carUpdateSchema),
  ensure.validCarExists, 
  (req, res) => controller.update(req, res)
  )
router.delete(
  "/:id",
  ensure.validCarExists,
  (req, res) => controller.delete(req, res)
  )