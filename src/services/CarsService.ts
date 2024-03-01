import { prisma } from "../database/prisma";
import { CarCreate, CarReturn } from "../interfaces";
import { carReturnSchema } from "../schemas";


export class CarsService {

  public create = async (payload: CarCreate): Promise<CarReturn> => {
    const newCar = await prisma.car.create({
      data: payload
    });
    return carReturnSchema.parse(newCar)
  };

}