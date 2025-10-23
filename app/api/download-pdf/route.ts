import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, otp, enteredOtp } = await req.json();

  // OTP verification
  if (otp !== enteredOtp) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public", "courses", "SAPSD-Course.docx");
  const fileBuffer = fs.readFileSync(filePath);

  // Wrap Buffer as Uint8Array for NextResponse
  return new NextResponse(new Uint8Array(fileBuffer), {
    status: 200,
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": `attachment; filename="SAPSD-Course.docx"`,
    },
  });
}
