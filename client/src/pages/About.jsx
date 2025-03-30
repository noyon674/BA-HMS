import React from "react";
import AboutServiceSection from "../components/about/AboutServiceSection";
import AboutUs from "../components/about/AboutUs";
import HeroSection from "../components/about/HeroSection";
import MedicalPractice from "../components/about/MedicalPractice";

const About = () => {
  return (
    <div>
      <AboutUs />
      <HeroSection />
      <AboutServiceSection />
      <MedicalPractice />
    </div>
  );
};

export default About;
