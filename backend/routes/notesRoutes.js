import express from "express";
const router = express.Router();
import {getallNotes,getNotebyId,updateNote,createNote,deleteNote} from "../../controllers/notesController.js";

// app.get("/api/notes", (req, res) => {
//   res.send('<h1>Welcome to the Notes API</h1>');
// });
router.get("/",getallNotes)
router.get("/:id",getNotebyId)

router.post("/",createNote)

// router.post("/sth",(req,res)=>{
//   res.status(201).json({message:"Post created successfully"});
// })
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router;