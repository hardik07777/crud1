import mongoose from "mongoose"

export const connectDb = async()=>{
    try {
       const conn = await mongoose.connect(process.env.MONGODB_URI);
       console.log(`mongo db connected ${conn.connection.host}`);
       
    } catch (error) {
        console.log(`error in connection ${error.message}`);
        process.exit(1); // process code 1 means exit with failure but 0 means success
    }
}