import React, { useState } from "react";
import "./about.css"; // Ensure this file exists
import { useSpring, animated } from "@react-spring/web";

function About() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const slideUp = useSpring({
    from: { transform: "translateY(100px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  const slideInFromRight = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 200, friction: 20 },
    delay: 500,
  });

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-container">
        <h2 className="breadcrumb">Home &raquo; About Us</h2>
        <h1 className="title">Caring For The Health & Well Being Of Family.</h1>
        <p className="description">
          Our family-centered approach ensures each member of your family
          receives personalized attention and care tailored to their needs.
        </p>
      </div>

      {/* Doctor Profile Section */}
      <div className="doctor-container">
        <animated.div style={slideUp} className="doctor-card">
          <img
            src="./assets/images/dr.jpeg" // Replace with actual image
            alt="Dr. Elizabeth Foster"
            className="doctor-image"
          />
          <h3 className="doctor-name">Dr. Elizabeth Foster</h3>
          <p className="doctor-title">Family Physician</p>
          <p className="doctor-signature">Michael Bins</p>
        </animated.div>
      </div>

      {/* Who We Are Section */}
      <div className="who-we-are-container">
        <div className="image-container">
          <img
            src="./assets/images/lab.jpeg"
            alt="Scientist using a microscope"
            className="who-we-are-image"
          />
        </div>

        <animated.div style={slideInFromRight} className="text-container">
          <h3 className="subheading">WHO WE ARE</h3>
          <h1 className="title">
            Improving The Quality Of Your Life Through Better Health.
          </h1>
          <p className="description">
            We offer a wide range of comprehensive healthcare services to
            address all aspects of your health. From preventive care and health
            screenings to specialized treatments and chronic disease management.
          </p>
          <button className="play-video-btn">▶ Play Video</button>
        </animated.div>
      </div>

      <div className="text-cont">
        <h3 className="subheading">Top Services</h3>
        <h1 className="title">We Are a Progressive Medical Clinic.</h1>
      </div>
      {/* Two Clickable Cards Side by Side */}
      <div className="clickable-cards-container">
        <div
          className={`clickable-card ${isClicked1 ? "clicked" : ""}`}
          onClick={() => setIsClicked1(!isClicked1)}
        >
          {" "}
          <img
            src="./assets/images/micro.svg"
            alt="Medical History Icon"
            className="card-icon"
          />
          <h2 className="card-title">Modern Laboratory</h2>
          <p className="card-description">
            Our laboratory is equipped with the latest diagnostic equipment and automation systems, ensuring precise.
          </p>
          <button className="read-btn">Read More ➜</button>
        </div>

        <div
          className={`clickable-card ${isClicked2 ? "clicked" : ""}`}
          onClick={() => setIsClicked2(!isClicked2)}
        >
          <div className="card-content">
            <img
              src="./assets/images/write.svg"
              alt="Medical History Icon"
              className="card-icon"
            />
            <h2 className="card-title">Experienced Doctors</h2>
            <p className="card-description">
             We take pride in our team of experienced doctors who are at the forefront of delivering exceptional.
            </p>
            <button className="read-btn">Read More ➜</button>
          </div>
        </div>
      </div>
      <div
        className={`clickable-card ${isClicked3 ? "clicked" : ""}`}
        onClick={() => setIsClicked3(!isClicked3)}
      >
        {" "}
        <img
          src="./assets/images/doc.svg"
          alt="Medical History Icon"
          className="card-icon"
        />
        <h2 className="card-title">Our Expertise</h2>
        <p className="card-description">
          Discover how our specialists can help you stay healthy.
        </p>
        <button className="read-btn">Read More ➜</button>
      </div>

      {/* New Section */}
      <div className="medical-practice-container">
        <h3 className="highlighted-text">
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </h3>
        <h1 className="main-heading">
          We Provide All Aspects Of Medical Practice For Your Whole Family!
        </h1>
        <p className="bold-text">
          Welcome to medipro, where we offer comprehensive medical care tailored
          to every member of your family.
        </p>
        <p className="descriptiones">
          Our dedicated team of healthcare professionals is committed to
          providing you and your loved ones with personalized and compassionate
          healthcare services. We understand the importance of family health.
        </p>
        <ul className="services-list">
          <li>✅ Family-Centered Care</li>
          <li>✅ Preventive Services</li>
          <li>✅ Vaccinations and Immunizations</li>
        </ul>
        <button className="get-started-btn">Get Started ➜</button>
      </div>
      {/* New Section: Patient Information */}
      <div className="patient-info-section">
        <div className="info-card">
          <img
            src="./assets/images/note.svg"
            alt="Patient Info Icon"
            className="info-icon"
          />
          <div className="info-text">
            <h2>Patient Information</h2>
            <p>
              I hereby give consent to and its healthcare professionals to
              provide medical treatment.
            </p>
          </div>
        </div>

        <div className="info-card">
          <img
            src="./assets/images/note.svg"
            alt="Emergency Contact Icon"
            className="info-icon"
          />
          <div className="info-text">
            <h2>Emergency Contact</h2>
            <p>
              This application form is for informational purposes only and does
              not guarantee.
            </p>
          </div>
        </div>

        <div className="info-card">
          <img
            src="./assets/images/note.svg"
            alt="Medical History Icon"
            className="info-icon"
          />
          <div className="info-text">
            <h2>Medical History</h2>
            <p>
              Our medical history is a vital piece of information that provides
              healthcare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
