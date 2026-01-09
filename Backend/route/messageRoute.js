import express from "express";
import Message from "../model/message.model.js";

const router = express.Router();

router.post("/message", async (req, res) => {
  try {
    console.log("CONTACT BODY 👉", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("CONTACT SERVER ERROR 👉", error);
    res.status(500).json({
      message: "Server error while sending message",
    });
  }
});

export default router;
