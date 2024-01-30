import express from 'express';
import cors from 'cors';
import "dotenv/config"
import mongoose from 'mongoose'
import usersRoutes from './routes/users.js';
import authRoutes from './routes/auth.js'
import myHotelRoutes from './routes/my-hotels.js   '
import hotelRoutes from './routes/hotel.js'
import cookieParser from 'cookie-parser'
import { v2 as cloudinary } from "cloudinary";
import path from 'path'
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)



 const app = express();
 app.use(cookieParser());

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(
        cors({
          origin: "http://localhost:5173",
          credentials: true,
        })
      );

      app.use(express.static(path.join(__dirname, "../../frontend/front-end/dist")));


      app.use("/api/auth", authRoutes);
    app.use("/api/users", usersRoutes);
    app.use("/api/my-hotels",myHotelRoutes)
    app.use("/api/hotels",hotelRoutes)

  

    app.listen(7000,()=>{
        console.log("server running")
    })