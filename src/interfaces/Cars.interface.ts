import { z } from 'zod';
import { 
  carCreateSchema,
  carReturnSchema,
  carUpdateSchema
} from "../schemas";

type CarCreate = z.infer<typeof carCreateSchema>
type CarReturn = z.infer<typeof carReturnSchema>
type CarUpdate = z.infer<typeof carUpdateSchema>

export {
  CarCreate,
  CarReturn,
  CarUpdate
};