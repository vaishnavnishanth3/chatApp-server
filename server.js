import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello World!!");
})

app.use("/api/auth", authRoutes)

app.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${port}`);
})
