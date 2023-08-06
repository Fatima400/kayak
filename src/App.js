import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Tours from "./components/Tours";
import Support from "./components/Support";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;