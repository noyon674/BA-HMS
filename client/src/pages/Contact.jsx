import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactSection from "../components/contact/ContactSection";

const Contact = () => {
  return (
    <div>
      <ContactSection />
      <ContactMap />
      <ContactForm />
    </div>
  );
};

export default Contact;
