import { z } from "zod";

export const loginRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.string(),
  username: z.string(),
  fullname: z.string(),
  confirmPassword: z.string(),
});
export const accountType = ["Coach", "Professional"];
export type RegisterLoginFormFields = z.infer<typeof loginRegisterSchema>;
