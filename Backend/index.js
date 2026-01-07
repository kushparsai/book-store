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

// DB
mongoose
  .connect(process.env.MongoDBURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
