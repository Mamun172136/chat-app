import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectionToMongoDB.js";
const app = express();
dotenv.config();

app.get("/", () => {
  resizeBy.send("hello ");
});

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  connectToMongoDB();
  console.log("server is running on port 5000");
});
