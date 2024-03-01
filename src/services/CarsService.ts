import { prisma } from "../database/prisma";
import { CarCreate, CarReturn, CarUpdate } from "../interfaces";
import { carReturnSchema } from "../schemas";


export class CarsService {

  public create = async (payload: CarCreate): Promise<CarReturn> => {
    const newCar = await prisma.car.create({
      data: payload
    });
    return carReturnSchema.parse(newCar);
  };

  public read = async (): Promise<Array<CarReturn>> => {
    const getAll = await prisma.car.findMany();
    return carReturnSchema.array().parse(getAll);
  };

  public readById = async (id: number) => {
    const cars = await prisma.car.findUnique({
      where: { id }
    });
    return carReturnSchema.parse(cars);
  };

  public update = async (id: number, payload: CarUpdate): Promise<CarReturn> => {
    const carUpdate = await prisma.car.update({
      where: { id },
      data: payload
    });
    return carReturnSchema.parse(carUpdate);
  };

}