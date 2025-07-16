import express from "express";
import authRoutes from "../routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "../lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "../routes/message.route.js";
import cors from "cors";
import { app, server } from "../lib/socket.js";

dotenv.config();

// Define the port
const PORT = process.env.PORT;

// 🔹 Move CORS to the top
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// 🔹 Increase JSON payload size
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(connectDB());
});
