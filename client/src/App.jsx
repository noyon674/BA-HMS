import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog_details_page from "./pages/Blog_details_page";
import Department_details from "./pages/Department_details";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Take_Appoinment from "./components/common/Take_Appoinment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Blog_details_page />} />
          <Route path="/departments/:name" element={<Department_details />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appoinment" element={<Take_Appoinment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
