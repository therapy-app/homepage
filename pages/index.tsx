import type { NextPage } from "next";
import Footer from "../components/Footer";
import AnalyticsSection from "../src/sections/analytics";
import AppointmentsSection from "../src/sections/appointments";
import FaqSection from "../src/sections/faq";
import LandingSection from "../src/sections/landing";
import PatientsSection from "../src/sections/patients";

const IndexPage: NextPage = () => {
  return (
    <>
      <LandingSection></LandingSection>
      <AnalyticsSection></AnalyticsSection>
      <PatientsSection></PatientsSection>
      <AppointmentsSection></AppointmentsSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
