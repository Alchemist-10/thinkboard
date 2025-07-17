import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  notesRoutes from "./routes/notesRoutes.js";
import connectDB from "../config/db.js";
import ratelimiter from "../middleware/rateLimiter.js";
import path from "path"
dotenv.config();

 // Connect to MongoDB
const app = express();
const __dirname=path.resolve()

 //middle ware
//  if(process.env.NODE_ENV===  "production")
// { app.use(cors(
//    {
//       origin:["http://localhost:5176",
//       "http://localhost:5173",
//       "http://localhost:5174"]
//    }
// ))}
 app.use(express.json())// parses json requests so that we cna access title and content or 
 // whatever key values of the object...

 
 app.use(ratelimiter)
app.use("/api/notes", notesRoutes);
if(process.env.NODE_ENV===  "production")
{
   app.use(express.static(path.join(__dirname,"../Frontend/note-front/dist")));
app.get("*",(req,res)=>{
   res.sendFile(path.join(__dirname,"../Frontend/note-front","dist","index.html"))
})}

const PORT = process.env.PORT || 5005; // Use the PORT from .env or default to 5004

 connectDB().then(()=>{
    app.listen(5005, () => console.log("Server started on port 5005"));

 })



