import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import NavContext from "./context/NavContext";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <NavContext>
        <Navbar />
        <FullScreenNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </NavContext>
    </div>
  );
};

export default App;
