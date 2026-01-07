import express from "express";
import nodemailer from "nodemailer";
import Message from "../model/Message.js";

const router = express.Router();

router.post("/messages", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"BookVillage Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message saved & email sent",
    });
  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({
      success: false,
      error: "Message not sent",
    });
  }
});

export default router;
