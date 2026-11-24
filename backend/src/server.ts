import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db";
import prisma from "./config/prisma";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);


const testDatabase = async () => {
  try {
    await prisma.$connect();

    console.log("Prisma connected to MySQL successfully!");
  } catch (error) {
    console.error("Prisma database connection failed:", error);
  }
};

testDatabase();




const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Job Portal Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});