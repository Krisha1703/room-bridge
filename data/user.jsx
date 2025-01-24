import { db } from "../lib/db";

// Function to fetch user by email
export const getUserByEmail = async (email) => {
  try {
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() }, 
    });
    return user;
  } catch (error) {
    return null;
  }
};

// Function to fetch user by ID
export const getUserById = async (id) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};
