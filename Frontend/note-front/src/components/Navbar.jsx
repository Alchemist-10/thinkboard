import { Link } from "react-router"
import { PlusIcon } from "lucide-react"


const Navbar = () => {

    return (
        <header style={{
            background: "radial-gradient(130% 115% at 50% 100%, #000 60%,#10b981 100%)"
        }} >
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    <Link to={'/'} >
                        <h1 className="text-3xl text-green-400  font-bold font-mono tracking-tight">
                            Thinkboard</h1></Link>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className="btn btn-primary  ">
                            <PlusIcon className="size-5"></PlusIcon>
                            New
                        </Link>
                    </div>

                </div></div>
        </header>
    )
}
// 
export default Navbar