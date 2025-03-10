import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer er transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Function to send email
const sendEmail = async (name, email, message) => {
  try {
    const mailOptions = {
      from: `${email}`, // User's mail
      to: process.env.MAIL_RECEIVER, // receiver's email address
      subject: `New Message from ${name}`, // Subject
      text: message, // Message content
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
};

export async function POST(req) {
  if (req.method === "POST") {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required", status: 400 },
        { status: 400 }
      );
    }

    try {
      const response = await sendEmail(name, email, message);
      if (response.success) {
        return NextResponse.json(
          { message: "Email sent successfully!", status: 200 },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { error: "Failed to send email.", status: 400 },
          { status: 400 }
        );
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email.", status: 500 },
        { status: 500 }
      );
    }
  } else {
    NextResponse.json(
      { error: "Method not allowed", status: 400 },
      { status: 405 }
    );
  }
}
