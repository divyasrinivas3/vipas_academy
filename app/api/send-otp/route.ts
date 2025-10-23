// /api/send-otp/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Vipas Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP for Syllabus Download",
      html: `
        <div style="font-family:sans-serif;">
          <h2>OTP Verification</h2>
          <p>Your OTP for syllabus download:</p>
          <h1 style="color:#1e40af;">${otp}</h1>
          <p>This OTP will expire in 5 minutes.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, otp });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
