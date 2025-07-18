import mongoose from "mongoose";
// 1 st you need to create a schema
// 2 nd you need to create a model based off that schema
const noteSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    } 
)
const Note=mongoose.model("Note",noteSchema)
export default Note