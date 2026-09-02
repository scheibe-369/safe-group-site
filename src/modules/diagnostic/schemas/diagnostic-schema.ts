import { z } from "zod";
import { operationSizeOptions, priorityOptions, sectorOptions } from "../data/options";

export const diagnosticSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(180),
  phone: z.string().trim().min(7).max(30),
  company: z.string().trim().min(2).max(140),
  sector: z.enum(sectorOptions),
  operationSize: z.enum(operationSizeOptions),
  priority: z.enum(priorityOptions),
  website: z.string().max(200).optional(),
}).strict();
