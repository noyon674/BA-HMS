import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import About from "./components/about/About";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog_details_page from "./pages/Blog_details_page";
import Department_details from "./pages/Department_details";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
