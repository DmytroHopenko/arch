import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Can't be empty"
  }),
  email: z.string().email({
    message: "Can't be empty"
  }),
  message: z.string().min(8, {
    message: "Can't be empty"
  })
});
