import React from "react";
import InfrastructureCulture from "../components/services/InfrastructureCulture";
import MeetOurDoctors from "../components/services/MeetOurDoctors";
import ServicesBanner from "../components/services/ServicesBanner";
import ServicesSection from "../components/services/ServicesSection";
import TopServices from "../components/services/TopServices";
import DownloadApp from "../components/services/DownloadApp";

const Services = () => {
  return (
    <div>
      <ServicesBanner />
      <ServicesSection />
      <TopServices />
      <MeetOurDoctors />
      <InfrastructureCulture />
      <DownloadApp />
    </div>
  );
};

export default Services;
