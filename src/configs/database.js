import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database Connected Successfully`)
    } catch (error) {
        console.log(error);
    }
};
export default connectDB;