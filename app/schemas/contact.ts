import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name" }),
  contact: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: "Enter a valid 10-digit contact number" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  education: z.enum(["B.Tech", "B.E", "M.Tech", "MBA", "Degree"], {
    errorMap: () => ({ message: "Please select your education" }),
  }),
  planOfFuture: z.enum(
    [
      "SAP Consultant",
      "Software Developer",
      "Data Analyst",
      "Business Analyst",
      "Project Manager",
      "Programmer",
    ],
    { errorMap: () => ({ message: "Please select your plan of future" }) }
  ),
  careerPath: z.string().min(1, { message: "Please select your career path" }),
  inquiryType: z.enum(["Demo", "Career Guidance", "Course"], {
    errorMap: () => ({ message: "Please select an inquiry type" }),
  }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;