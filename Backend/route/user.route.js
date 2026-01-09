import express from "express";
import { signup, login } from "../controller/user.controller.js";
const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);

export default router;