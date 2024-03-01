import { z } from 'zod';

const carSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  brand: z.string().min(1),
  year: z.number().int(),
  km: z.number().int().min(0),
});

const carCreateSchema = carSchema.omit({ id: true })
const carReturnSchema = carSchema
const carUpdateSchema = carCreateSchema

export {
  carCreateSchema,
  carReturnSchema,
  carUpdateSchema
};


