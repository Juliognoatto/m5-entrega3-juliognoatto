import { inject, injectable } from "tsyringe";
import { CarsService } from "../services";
import { Request, Response } from "express";

@injectable()
export class CarsController {
  // private carsService: CarsService = new CarsService();

  constructor(@inject("CarsService") private carsService: CarsService) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newCar = await this.carsService.create(req.body);
    return res.status(201).json(newCar);
  };

  public read = async (req: Request, res: Response): Promise<Response> => {
    const getAll = await this.carsService.read();
    return res.status(200).json(getAll);
  };

  public readById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const cars = await this.carsService.readById(id);
    return res.status(200).json(cars)
  };

  public update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const carUpdate = await this.carsService.update(id, req.body);
    return res.status(200).json(carUpdate);
  };

  public delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await this.carsService.delete(id)
    return res.status(204).json()
  }
}