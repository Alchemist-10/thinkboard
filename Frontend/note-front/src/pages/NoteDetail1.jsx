import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios"
import toast from "react-hot-toast"
import Navbar from "../components/Navbar";

const NoteDetailPage = () => {
    const [note, setnote] = useState(null)
    const [loading, setloading] = useState(false)
    const [saving, setsaving] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams();

    const handledelete = async () => {
        if (!window.confirm(`Are you sure you want to delete the note ?`)) return
        try {

            api.delete(`/notes/${id}`)
            toast.success('Note deleted successfully')
            navigate("/")
        }
        catch (error) {
            toast.error("Error deleting note")

        }

    }
    const handlesave = async () => {
        if (!note.title || !note.content) {
            toast.error("please add title and content")
            return;
        }

        setsaving(true)
        try {
            await api.put(`/notes/${id}`, note)
            toast.success("Note updated")
            navigate("/")
        }
        catch (eror) {
            toast.error("Unable to save")
        }
    }

    useEffect(() => {
        const fetchnote = async () => {
            try {
                const res = await api.get(`/notes/${id}`);
                setnote(res.data);
            }
            catch (error) {
                console.error("error in fetching notes", error)
                toast.error("error fetching notes")
            }
            finally {

                setloading(false)
            }
        }; fetchnote()
    }, [id]
    )
    console.log({ note })
    return (
        <div>

            <Navbar />
            {loading && <center><span className="loading  loading-bars loading-lg"></span></center>}
            {/* <h1>{note.title}</h1>
            {/* <h3>{note.content}</h3> */}
            <div className="min-h-screen flex items-center justify-center px-4 bg-base-200" >

                <div className="card bg-base-300 w-full max-w-xl p-6 shadow-xl">
                    <div className="flex justify-between mb-6 max-w-2xl justify">
                        <Link to={"/"} className="btn btn-outline mb-6">
                            <ArrowLeftCircleIcon className="size-5" />
                            Back to notes
                        </Link>
                        <button className="btn btn-outline border-red-700 mx-3 text-red-700" >{<Trash2 />}Delete Note</button>

                    </div>
                    <h2 className="card-title">Create New Note</h2>
                    <form onSubmit={handlesubmit}>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text" >Title</span>
                            </label>
                            <input type="text" placeholder="Enter title"
                                className="input input-primary"
                                value={note.title}
                                onChange={(e) => setnote({ ...note, title: e.target.value })}
                            />
                        </div>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text" >Content</span>
                            </label>
                            <textarea type="text" placeholder="Enter content"
                                className="textarea h-32 textarea-primary"
                                value={content}
                                onChange={(e) => setnote({ ...note, content: e.target.value })}
                            />
                        </div>
                        <div className="card-actions  justify-end">
                            <button type="submit"
                                className="btn btn-primary " disabled={saving}>
                                {saving ? `Saving...` : `Save Note`}
                            </button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}
export default NoteDetailPage;