import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

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
    const {
      name,
      contact,
      email,
      education,
      planOfFuture,
      careerPath,
      inquiryType,
    } = data;

    // 1️⃣ Send Email to Admin
    await transporter.sendMail({
      from: `"Vipas Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📩 New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Plan of Future:</strong> ${planOfFuture}</p>
        <p><strong>Career Path:</strong> ${careerPath}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString("en-IN")}</p>
      `,
    });

    // 2️⃣ Send Confirmation Email to User
    await transporter.sendMail({
      from: `"Vipas Academy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎉 Thank You for Contacting Vipas Academy!`,
      html: `
        <h2>Dear ${name},</h2>
        <p>Thank you for reaching out to <strong>Vipas Academy</strong>! 🎓</p>
        <p>We have received your details successfully and our team will get in touch with you soon.</p>

        <p><strong>Submitted Details:</strong></p>
        <ul>
          <li><strong>Contact:</strong> ${contact}</li>
          <li><strong>Education:</strong> ${education}</li>
          <li><strong>Plan of Future:</strong> ${planOfFuture}</li>
          <li><strong>Career Path:</strong> ${careerPath}</li>
          <li><strong>Inquiry Type:</strong> ${inquiryType}</li>
        </ul>

        <p>Best Regards,</p>
        <p><strong>Team Vipas Academy</strong><br/>
        <a href="https://vipasacademy.com">www.vipasacademy.com</a></p>
      `,
    });

    // 3️⃣ Save to Google Sheet
    const sheetResponse = await fetch(
      process.env.SHEET_BEST_URL as string,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Contact: contact,
          Email: email,
          Education: education,
          "Plan of Future": planOfFuture,
          "Career Path": careerPath,
          "Inquiry Type": inquiryType,
          Date: new Date().toLocaleString("en-IN"),
        }),
      }
    );

    if (!sheetResponse.ok) {
      console.warn("⚠️ Failed to save data to Google Sheet");
    }

    return NextResponse.json({
      message: "Emails sent & data saved successfully",
    });
  } catch (err) {
    console.error("❌ Error:", err);
    return NextResponse.json(
      { error: "Failed to process form" },
      { status: 500 }
    );
  }
}
