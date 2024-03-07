import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectionToMongoDB.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello ");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  connectToMongoDB();
  console.log("server is running on port 5000");
});
