import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import messageRoute from "./route/messageRoute.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors());

app.use(express.json());

app.use("/api", messageRoute);
app.use("/book", bookRoute);
app.use("/user", userRoute);

// 🔥 test route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
