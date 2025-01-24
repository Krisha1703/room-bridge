import * as z from "zod";

//zod validation for login form
export const LoginSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
        message: "Must be a valid email"
    }),
  password: z
    .string()
    .min(1, {
      message: "Password is required", 
    }),
});


//zod validation for sign up form
export const RegisterSchema = z
.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
  
    password: z.string().min(6, { message: "Minimum 6 characters required" }),

    confirmPassword: z.string().min(6, { message: "Minimum 6 characters required" }),
  
    firstName: z.string().min(1, { message: "First Name is required" }),
  
    lastName: z.string().min(1, { message: "Last Name is required" }),
  
})

//make sure that both passwords match
.refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});
