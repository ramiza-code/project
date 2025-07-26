import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js"
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js"


const router = express.Router();  // Corrected 'router()' to 'Router()'


router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage)

export default router;