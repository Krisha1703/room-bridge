"use server";

import * as z from "zod";
import { LoginSchema } from "../schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "../data/user";

// Retrieve test user credentials from environment variables
const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL;
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD;

export const login = async (data) => {
  // Validate input data
  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  // Check if the email matches the test user's email
  if (email === TEST_USER_EMAIL && password === TEST_USER_PASSWORD) {
    return {
      success: true,
      FirstName: "Test",
      LastName: "User",
      Email: TEST_USER_EMAIL,
      Role: "guest", 
      Verified: true, 
      Created: new Date().toISOString(),
    };
  }

  // Check if user exists in the database
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found! Please sign up." };
  }

  // Verify the password
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return { error: "Incorrect password! Please try again." };
  }

  // Check if user is verified
  if (!existingUser.isVerified) {
    return { error: "Please verify your email first" };
  }

  // Return success with the user's details
  return {
    success: true,
    FirstName: existingUser.firstName,
    LastName: existingUser.lastName,
    Email: existingUser.email,
    Role: existingUser.role,
    Verified: existingUser.isVerified,
    Created: existingUser.createdAt,
  };
};
