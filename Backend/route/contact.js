import express from "express";
import { sendMail } from "../utils/mailer.js";

const router = express.Router();

router.post("/messages", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendMail({ name, email, message });

    res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("EMAIL ERROR ❌", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

export default router;
