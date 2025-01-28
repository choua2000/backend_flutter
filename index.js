import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/configs/database.js";
import router from "./src/routes/routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/hello", (req, res) => {
    console.log("Hello world")
})
app.use("/api",router);
connectDB();
app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})