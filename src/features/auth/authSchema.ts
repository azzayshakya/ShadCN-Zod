import { z } from "zod";

export const authSchema = z.object({
  fullName: z.string().min(1, "Full name is required broth0"),
  password:z.string().min(5,"passWord must have atleast 5 long").max(8,"atleast 8 long"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be 10 digits") 
    .min(1, "Phone number is required"),
  address: z.string().min(5, "Address must be at least 5 characters long"),
  dob: z.string().nonempty("Date of Birth is required"),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type AuthSchema = z.infer<typeof authSchema>;
