import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // ensures server-side execution

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, contact, email, education, planOfFuture, careerPath } = data;

    // Email to Admin
    await transporter.sendMail({
      from: `"Vipas Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Plan of Future:</strong> ${planOfFuture}</p>
        <p><strong>Career Path:</strong> ${careerPath}</p>
      `,
    });

    // Confirmation Email to User
    await transporter.sendMail({
      from: `"Vipas Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your details!`,
      html: `
        <h2>Thank you, ${name}</h2>
        <p>We have received your details and will contact you soon.</p>
        <ul>
          <li>Contact: ${contact}</li>
          <li>Education: ${education}</li>
          <li>Plan of Future: ${planOfFuture}</li>
          <li>Career Path: ${careerPath}</li>
        </ul>
        <p>— Vipas Academy Team</p>
      `,
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
