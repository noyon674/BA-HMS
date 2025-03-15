import React from "react";

import Hero_Section from "../components/home/Hero_Section";
import Home_Appoinment from "../components/home/Home_Appoinment";
import Home_About from "../components/home/Home_About";
import Home_Service from "../components/home/Home_Service";
import Open_Appoinment from "../components/common/Open_Appoinment";

function Home() {
  return (
    <div>
      <Hero_Section />
      <Home_Appoinment />
      <Home_About />
      <Home_Service />
      <Open_Appoinment />
    </div>
  );
}

export default Home;
