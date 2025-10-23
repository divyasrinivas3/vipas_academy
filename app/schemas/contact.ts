import { z } from "zod";
import {
  educationOptions,
  planOfFutureOptions,
  careerOptionsMap,
  Education,
  PlanOfFuture,
  CoachingProgram,
} from "../types/form";

const coachingPrograms = Object.values(careerOptionsMap).flat() as CoachingProgram[];

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  contact: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Invalid email address"),
  education: z.enum(educationOptions as [Education, ...Education[]]),
  planOfFuture: z.enum(planOfFutureOptions as [PlanOfFuture, ...PlanOfFuture[]]),
  careerPath: z.enum(["", ...coachingPrograms] as ["" | CoachingProgram, ...("" | CoachingProgram)[]]),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
