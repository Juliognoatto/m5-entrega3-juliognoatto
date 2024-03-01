import { CarsService } from "../services";
import { Request, Response } from "express";

export class CarsController {
  private carsService: CarsService = new CarsService();

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newCar = await this.carsService.create(req.body)
    return res.status(201).json(newCar)
  }
}