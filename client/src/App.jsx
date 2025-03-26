import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/about/About";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";

import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
