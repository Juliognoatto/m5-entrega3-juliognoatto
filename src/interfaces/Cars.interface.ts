import { z } from 'zod';
import { 
  carCreateSchema,
  carReturnSchema,
  carUpdateSchema,
  carSchema
} from "../schemas";

type CarCreate = z.infer<typeof carCreateSchema>
type CarReturn = z.infer<typeof carReturnSchema>
type CarUpdate = z.infer<typeof carUpdateSchema>
type Car = z.infer<typeof carSchema>
export {
  CarCreate,
  CarReturn,
  CarUpdate,
  Car
};