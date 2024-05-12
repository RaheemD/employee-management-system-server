import dotenv from 'dotenv';
dotenv.config();



import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";



const app = express();
app.use(cors({
    origin: '*', // Allows all domains to make requests
    methods: ["GET", "POST", "PUT","DELETE"],
    credentials: true
  }));
  
app.use(express.json());
app.use('/auth', adminRouter);
app.use(express.static('Public'))



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
