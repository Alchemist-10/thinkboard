import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  notesRoutes from "./routes/notesRoutes.js";
import connectDB from "../config/db.js";
import ratelimiter from "../middleware/rateLimiter.js";
dotenv.config();

 // Connect to MongoDB
const app = express();

 //middle ware
 app.use(cors(
   {
      origin:["http://localhost:5176",
      "http://localhost:5173",
      "http://localhost:5174"]
   }
))
 app.use(express.json())// parses json requests so that we cna access title and content or 
 // whatever key values of the object...

 
 app.use(ratelimiter)
app.use("/api/notes", notesRoutes);


const PORT = process.env.PORT || 5005; // Use the PORT from .env or default to 5004

 connectDB().then(()=>{
    app.listen(5005, () => console.log("Server started on port 5005"));

 })



