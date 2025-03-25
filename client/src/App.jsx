import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./components/home/Home";
import About from "./components/about/About"; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> {/* Ensure path is correct */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

