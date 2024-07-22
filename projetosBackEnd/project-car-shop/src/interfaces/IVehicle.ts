import { z } from 'zod';

export const vehicleAttributes = z.object({
  model: z.string().min(3),
  year: z.number().gte(1900).lte(2022).nonnegative(),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().nonnegative(),
});

export type IVehicle = z.infer<typeof vehicleAttributes>;