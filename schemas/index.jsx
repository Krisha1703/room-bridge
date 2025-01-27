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

//zod validation for upadting user profile
export const UserProfileSchema = z.object({
  
  firstName: z
    .string()
    .optional()
    .refine((val) => !val || val.trim() !== "", {
      message: "First name must not be empty",
    }),

  lastName: z
    .string()
    .optional()
    .refine((val) => !val || val.trim() !== "", {
      message: "Last name must not be empty",
    }),
  
  mobile: z
  .string()
  .optional()
  .refine((val) => !val || /^\d{10,15}$/.test(val), {
    message: "Must be a valid mobile number (10-15 digits) without spaces or (-)",
  }),

  recoveryEmail: z
  .string()
  .optional()
  .refine((value) => !value || z.string().email().safeParse(value).success, {
    message: "Must be a valid email address",
  }),

  city: z.string().optional(),

  country: z.string().optional(),

  gender: z.enum(["male", "female", "other", ""]).optional(),

  dob: z.string().optional(),

  image: z
    .any()
    .optional()  // Make image field optional
    .refine((file) => {
      // Only run validation if the file is provided
      if (file) {
        return file instanceof File || typeof file === "string"; // Validate file or URL
      }
      return true;  // If no file, skip the validation
    }, {
      message: "Image must be a file or a valid URL",
  }),
  
});

