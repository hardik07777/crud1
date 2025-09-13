// entry point for application
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/db.js";
import productroutes from "./routes/product.js";

dotenv.config();

const app = express();

// middleware (must come after app is declared)
app.use(cors({
  origin: "https://crud1-bice.vercel.app", // your Vercel frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json()); // accept JSON in req.body

// routes
app.use("/api/product", productroutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDb();
  console.log(`server is running on port ${PORT}`);
});
