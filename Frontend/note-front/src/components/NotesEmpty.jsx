import { NotebookPen, PlusIcon } from "lucide-react"
import { Link } from "react-router"
const NotesEmpty = () => {
    return (
        <center><div>

            <NotebookPen /><br />
            <p className="font-mono font-bold">No notes created</p><br />
            <Link to={'/create'} className="btn btn-success">{<PlusIcon />}Create Note
            </Link >

        </div></center>
    )
}
export default NotesEmpty
