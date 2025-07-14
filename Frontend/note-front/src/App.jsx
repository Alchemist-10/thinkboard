import { Route, Routes } from "react-router";
import HomePage from './pages/HomePage1';
import CreatePage from './pages/CreatePage1';
import NoteDetailPage from './pages/NoteDetail1';
import toast from "react-hot-toast";

const App = () => {
  return (
    // for readymade bg from igbelick  // <div className="absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#0000_1px)] bg-[size:20px_20px]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}
export default App