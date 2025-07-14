import { Link } from "react-router"
import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { formatdate } from "../lib/utils"
import { useState } from "react"
import api from "../lib/axios";
import toast from "react-hot-toast";

function Notecard({ note, setnotes }) {
    const [ishover, sethover] = useState(false)
    const [buttonhover, setbuttonhover] = useState(false)
    const handledelete = async (e, id) => {
        e.preventDefault();
        if (!window.confirm("Are you sure you want to delete this note")) return;

        try {
            await api.delete(`/notes/${id}`)
            setnotes((prev) => prev.filter(note => note._id !== id))
            toast.success("Note deleted successfully")

        }
        catch (error) {
            toast.error("failed to delete the note")
            console.log("Error in deleting the note")
        }

    }
    return (
        <Link to={`/note/${note._id} `}
            className="card border border-green-500 transition-all duration-300"
            style={{
                boxShadow: ishover
                    ? '0 10px 15px -3px rgba(34, 197, 94, 0.5)' // green-500
                    : '0 10px 15px -3px rgba(185, 28, 28, 0.5)', // blue-500
            }}
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
        >
            <div className="card-body">
                <h3 className="card-title" >{note.title}</h3>
                <p className="text-base-content/70 line-clamp-3" >{note.content}</p>
                <div className="card-actions">
                    <span className="text-sm">
                        {formatdate(new Date(note.createdAt))}
                    </span>
                    <div className="flex items-center gap-1 ">
                        <PenSquareIcon className="size-4 text-green-400" />
                        <button
                            style={{
                                boxShadow: buttonhover
                                    ? "0 4px 12px rgba(220, 38, 38, 0.6)" // red-600 with glow
                                    : "0 2px 6px rgba(220, 38, 38, 0.3)", // subtle red
                                transition: "box-shadow 0.3s ease-in-out",
                                border: "none",
                                background: "transparent",
                                cursor: "pointer"
                            }}
                            onMouseEnter={() => setbuttonhover(true)}
                            onMouseLeave={() => setbuttonhover(false)}
                        >
                            <Trash2Icon
                                className="size-4 text-red-600"
                                onClick={(e) => handledelete(e, note._id)}
                            />
                        </button>

                    </div>
                </div>

            </div>

        </Link>
    )
}
export default Notecard