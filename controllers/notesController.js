import Note from '../model/Note.js'

export const getallNotes= async (req,res)=>{
    try{
        const notes = await Note.find().sort({"createdAt":-1})//newest note is first
        res.status(200).json(notes)
        
    }
    catch(error){
        console.error('Error in getallnotes controller')
        res.status(500).json({message:"Internal server error"})
    }

}
export async function getNotebyId(req,res){
    try{
        const note=await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found"})
        res.json(note)

    }
    catch(error){
        console.error('Error in getnotebyId controller')
        res.status(500).json({message:"Internal server error"})
    }
}

export async function createNote(req,res){
    try{
        const {title,content}=req.body
        const newnote=new Note({title,content})
       const savednote= await newnote.save()
       res.status(201).json(savednote)
    }
    catch(error)
    {
         console.error('Error in createnotes controller')
        res.status(500).json({message:"Internal server error"})

    }
    // res.send('<h1>Note created success<h1>')
}
export async function updateNote(req,res){
    try{
        const {title,content}=req.body
        await Note.findByIdAndUpdate(req.params.id,{title,content})// req.params.whatever entered as path in the router file
        res.status(200).json({message:"Note updated successfully"})
    }
    catch(error)
    {
        console.log(`eror in updatenote controller ${error}`)
                res.status(500).json({message:"Internal server error"})

    }
}
export async function deleteNote( req,res){
    try{
        
       const deletenote= await Note.findByIdAndDelete(req.params.id)
       if(!deletenote) return res.status(204).json({message:'invalid id'})
        res.status(200).json({message:"Note Deleted successfully"})
    }
    catch(error)
    {
        console.log(`error in deletenote controller ${error}`)
        res.status(500).json({message:"Internal server error"})
    }
    // res.json({message:"Note deleted success!"})
}