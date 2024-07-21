import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js"
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port http://localhost:${port}`);
})
