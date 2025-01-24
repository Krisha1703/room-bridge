import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendVerificiationEmail(req) {
  try {
    const { email, firstName, lastName } = await req;

    // Generate the verification token and link
    const verificationToken = Buffer.from(`${email}-${Date.now()}`).toString("base64");
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/verify-user?token=${verificationToken}`;

    console.log("Verification Token: ",verificationToken);
    console.log("Verification Link: ",verificationLink);

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: [email],
      subject: "Verify Your Email Address",
      react: EmailTemplate({ firstName, lastName, verificationLink }),
      trackLinks: true, 
    });

    if (error) {
      console.error("Email send error:", error);
      return Response.json({ error: "Failed to send verification email" }, { status: 500 });
    }

    console.log(data);
    console.log("Verification email sent successfully");
    return Response.json({ success: "Verification email sent successfully", data }, { status: 200 });
    

  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
