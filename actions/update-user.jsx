"use server"

import * as z from "zod";
import { UserProfileSchema } from "../schemas";

export const updateUser = async (data) => {
    // Validate input data using the RegisterSchema
    const validatedFields = UserProfileSchema.safeParse(data);
  
    if (!validatedFields.success) {
      return { error: "Invalid fields!" };
    }

    console.log("Updated User Data: ",validatedFields.data)
    return { success: "User updated successfully" };
}