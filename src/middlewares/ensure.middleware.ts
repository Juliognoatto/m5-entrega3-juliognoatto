import { Response, Request, NextFunction } from "express";
import { AppError } from "../errors";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";

class ensureMiddleware {

  public validBody = (schema: AnyZodObject) => {
    return (req: Request, _: Response, next: NextFunction): void => {
      const result = schema.safeParse(req.body);
      if (!result.success) {
        throw new AppError("Invalid request body", 400)
      }
      next();
    };
  };

  public validCarExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const carId = parseInt(req.params.id, 10);
    const car = await prisma.car.findUnique({
      where: { id: carId },
    });
  
    if (!car) {
      throw new AppError("Car not found", 404);
    } else {
      return next();
    }
  };

};

export const ensure = new ensureMiddleware();