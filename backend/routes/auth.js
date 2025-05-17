import express from "express";
import { login } from "../controllers/auth.js";

// Authentication route that leads t
const router = express.Router();

router.post("/login", login);

export default router;