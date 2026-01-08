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

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", messageRoute);
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use(
  cors({
    origin: [
      "https://kushparsai.github.io",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
