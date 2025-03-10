"use server";

import * as z from "zod";
import { UserProfileSchema } from "../schemas";
import { db } from "../lib/db";
import { getUserByEmail } from "../data/user";

// Function to update user profile
export const updateUser = async (data) => {
  console.log("UPDATE USER DATA FUNCTION");
  console.log(data);
  // Validate input data using the UserProfileSchema
  const validatedFields = UserProfileSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, firstName, lastName, mobile, city, country, gender, dob, image } = validatedFields.data;

  console.log("User data received: ",validatedFields.data);

  // Function to update user profile
  try {
    // Logic to update the user profile (assuming you're using Prisma to update user data)
    const updatedUser = await db.user.update({
      where: { email },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobileNumber: mobile || null,
        profileImage: image || null,
        city: city || null,
        country: country || null,
        gender: gender || null,
        dateOfBirth: dob ? new Date(data.dateOfBirth) : null,
      },
    });

    return { success: "Profile updated successfully!", data: updatedUser };
  } catch (error) {
    // Check if the error object is valid and log it
    if (error instanceof Error) {
      console.log("Error details:", error.message);
    } else {
      console.log("Unexpected error:", error);
    }
    
    return { error: "An error occurred while updating the profile." };
  }

};
