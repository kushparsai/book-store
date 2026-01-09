import express from "express";
import Message from "../model/message.model.js";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1️⃣ Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2️⃣ Send Email
    await transporter.sendMail({
      from: `"Book Store Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // 👈 owner email
      subject: "📩 New Contact Message",
      html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("CONTACT EMAIL ERROR 👉", error);
    res.status(500).json({ message: "Message saved but email failed" });
  }
});

export default router;
