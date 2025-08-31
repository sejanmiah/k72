import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
        <Route path="/agence" element={<Agence></Agence>}></Route>
      </Routes>
    </div>
  );
};

export default App;
