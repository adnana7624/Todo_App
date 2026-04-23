import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const connectDB = async() => {
    try {
        console.log("Database connecting !! ")

        await mongoose.connect(process.env.MONGO_URI)

        console.log("mongodb conecct succesfully !!")
        
    } catch (error) {
        console.log("db connection error", error.message)
    }
}
export {connectDB}