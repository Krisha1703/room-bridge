"use server";

import * as z from "zod";
import { RegisterSchema } from "../schemas";
import bcrypt from "bcryptjs";
import { db } from "../lib/db";
import { getUserByEmail } from "../data/user";
import { SendVerificiationEmail } from "@/app/api/send/route";


// Function to determine role based on email address
const getRoleFromEmail = (email) => {
  const staffEmailPattern = {
    receptionist: /receptionist@roombridge\.com/,
    manager: /manager@roombridge\.com/,
    admin: /admin@roombridge\.com/,
    housekeeper: /housekeeper@roombridge\.com/,
  };

  // Check if email matches any staff pattern
  for (const [role, pattern] of Object.entries(staffEmailPattern)) {
    if (pattern.test(email)) {
      return role;  // Return the matched role
    }
  }

  // Default role for normal users
  return 'guest'; 
};



//Function to register user in database
// Function to register user in the database
export const register = async (data) => {
  // Validate input data using the RegisterSchema
  const validatedFields = RegisterSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { firstName, lastName, email, password, mobileNumber, profileImage, city, country, gender, dateOfBirth } = validatedFields.data;
  console.log(validatedFields.data)
  console.log("Database URL: ", process.env.DATABASE_URL);

  // Hash the password for storage
  const hashedPassword = await bcrypt.hash(password, 10);

  // Get the role based on email
  const role = getRoleFromEmail(email);

  // Check if the user already exists
  const existingUser = await getUserByEmail(email);
  console.log(existingUser);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  try {
    // Create the user with the assigned role (awaited to ensure the user is created properly)
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
        isVerified: false,
        createdAt: new Date(),
        mobileNumber: mobileNumber || null,   // Handle optional fields
        profileImage: profileImage || null,
        city: city || null,
        country: country || null,
        gender: gender || null,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null, 
      },
    });

    console.log("data sucess: " , data)
    SendVerificiationEmail(data);
    return { success: "Account created successfully! Please check your email to verify your account.", data: newUser };
  } 
  catch (error) {
    console.log("data fail: " , data)
    console.error("Error details:", JSON.stringify(error, null, 2)); // Logs detailed error info
    return { error: "An error occurred while creating the account." };
  }
};
