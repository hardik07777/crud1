// entry point for application
import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productroutes from "./routes/product.js"
dotenv.config();

const app = express();
app.use(express.json()); // this will help us to accept json data in the req.body
// to create a product in database 
app.use('/api/product',productroutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDb();
    console.log(`server is running on port ${PORT}`);
    

})