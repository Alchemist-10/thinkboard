import { useEffect, useState, Link } from "react";
import Navbar from "../components/Navbar.jsx";
import RatelimitedUI from "../components/RatelimitedUI.jsx";
import axios from "axios";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
import Notecard from "../components/Notecard.jsx";
import NotesEmpty from "../components/NotesEmpty.jsx";
import NoteDetailPage from "./NoteDetail1.jsx";

const HomePage = () => {
    const [isRateLimited, setRate] = useState(false);
    const [notes, setnotes] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchnote = async () => {
            try {
                const res = await api.get("/notes");
                console.log(res.data);
                setnotes(res.data);
                setRate(false); // ✅ fix

            } catch (error) {
                toast.error("Failed to load notes");
                console.log("Error fetching notes");
                if (error.response && error.response.status === 429) {
                    setRate(true); // ✅ fix
                } else {
                    toast.error("Failed to load notes");
                }
            } finally {
                setloading(false);
            }
        };
        fetchnote();
    }, []);

    ///console.log("Reached Home Page");



    return (
        <div className="min-h-screen">
            <Navbar />
            {isRateLimited && <RatelimitedUI />} {/* ✅ fix */}
            {/* you can render notes here too */}
            <div className="max-w-7xl  justify-center mx-auto p-4 mt-6">
                {loading && <center><span className="loading  loading-bars loading-lg"></span></center>
                }
                {notes.length === 0 && !isRateLimited && <NotesEmpty />}
                {notes.length > 0 && !isRateLimited && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {notes.map((item, index) => (
                            <Notecard key={index} note={item} setnotes={setnotes}></Notecard>


                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default HomePage;
