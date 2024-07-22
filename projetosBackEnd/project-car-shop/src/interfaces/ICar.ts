import { z } from 'zod';
import { vehicleAttributes } from './IVehicle';

export const carAttributes = vehicleAttributes.extend({
  doorsQty: z.number().nonnegative().gte(2).lte(4),
  seatsQty: z.number().nonnegative().gte(2).lte(7),
});

export type ICar = z.infer<typeof carAttributes>;