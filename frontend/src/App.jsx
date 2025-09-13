import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/mycomponents/Navbar";
import HomePage from "./pages/Homepage";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}


export default App;
