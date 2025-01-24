import { db } from "../../../../lib/db"; 

export async function GET(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return new Response(JSON.stringify({ error: "Missing or invalid token" }), { status: 400 });
  }

  try {
    // Decode token (assuming the token contains the email)
    const decodedToken = Buffer.from(token, "base64").toString("utf8");
    const [email] = decodedToken.split("-");

    // Find the user by email
    const user = await db.user.findUnique({ where: { email } });

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    // Update user status to verified
    await db.user.update({
      where: { email },
      data: { isVerified: true },
    });

    return new Response(JSON.stringify({ success: "User verified successfully." }), { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ error: "Failed to verify user" }), { status: 500 });
  }
}
