import { Response, Request, NextFunction } from "express";
import { AppError } from "../errors";
import { AnyZodObject } from "zod";

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

};

export const ensure = new ensureMiddleware();