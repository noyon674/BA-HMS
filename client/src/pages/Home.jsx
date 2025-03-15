import React from "react";

import Hero_Section from "../components/home/Hero_Section";
import Home_Appoinment from "../components/home/Home_Appoinment";
import Home_About from "../components/home/Home_About";
import Home_Service from "../components/home/Home_Service";
import Open_Appoinment from "../components/common/Open_Appoinment";
import Home_Work from "../components/home/Home_Work";
import Testimonial from "../components/common/Pateint_Testimonial";
import Home_Blog from "../components/home/Home_Blog";

function Home() {
  return (
    <>
      <Hero_Section />
      <Home_Appoinment />
      <Home_About />
      <Home_Service />
      <Open_Appoinment />
      <Home_Work />
      <Testimonial />
      <Home_Blog />
    </>
  );
}

export default Home;
