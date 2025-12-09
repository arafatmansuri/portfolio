import "dotenv/config";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_APP_PASSWORD,
  },
});

async function sendMail(receiversEmail: string, name: string, message: string) {
  await transporter.sendMail({
    from: receiversEmail, // sender address
    to: `mansurianas983@gmail.com`, // list of receivers
    subject: "Message from portfolio", // Subject line
    text: ``, // plain text body
    html: `
    <h1>${name}</h1>
    <h1>${receiversEmail}</h1>
    <p>${message}</p>
    `, // html body
  });
}

export async function POST(req: NextRequest) {
  try {
    const { email, message, fullname } = await req.json();
    await sendMail(email, fullname, message);
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ message, error }, { status: 500 });
  }
}
