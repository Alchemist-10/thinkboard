import { ArrowLeftCircleIcon } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "react-hot-toast"
import { Trash2 } from "lucide-react"

import api from "../lib/axios.js";

const CreatePage = () => {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [loading, setloading] = useState(false)
    const navigate = useNavigate();
    function handlesubmit(e) {
        e.preventDefault()
        console.log(`${title} : ${content}`)
        if (!title.trim() || !content.trim()) {
            toast.error(`All fields are required`)
            return
        }
        setloading(true)
        try {
            api.post("/notes/", {
                title, content
            })
            toast.success("Note created successfully")
            navigate("/")

        }
        catch (error) {
            toast.error("Failed to create note please try again later")

        }
        finally {
            setloading(false)
        }
    }

    return (
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
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text" >Content</span>
                        </label>
                        <input type="text" placeholder="Enter content"
                            className="textarea h-32 textarea-primary"
                            value={content}
                            onChange={(e) => setcontent(e.target.value)}
                        />
                    </div>
                    <div className="card-actions  justify-end">
                        <button type="submit"
                            className="btn btn-primary " disabled={loading}>
                            {loading ? `Creating...` : `Create Note`}
                        </button>
                    </div>

                </form>

            </div>

        </div>


    )
}
export default CreatePage