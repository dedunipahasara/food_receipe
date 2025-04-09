import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import React from 'react'
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Receipe from "./pages/Receipe.jsx";


function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/receipe" element={<Receipe />} /> 


      </Routes>
    </>
  );
}

export default App;
