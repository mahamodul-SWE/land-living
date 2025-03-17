"use client";
import nodemailer from "nodemailer";

// Function to send email
const sendEmail = async (name, email, message) => {
  // Check if all fields are filled
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required" };
  }
  try {
    // Nodemailer er transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER,
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${email}`, // User's mail
      to: process.env.NEXT_PUBLIC_MAIL_RECEIVER, // receiver's email address
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

export default sendEmail;
