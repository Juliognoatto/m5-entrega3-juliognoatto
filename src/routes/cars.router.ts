import { Router } from "express";
import { CarsController } from "../controllers";


export const router = Router();
const controller = new CarsController();

router.post("", controller.create)
router.get("", controller.read)
router.get("/:id", controller.readById)
router.patch("/:id", controller.update)
router.delete("/:id", controller.delete)