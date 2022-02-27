import type { NextPage } from "next";
import Footer from "../components/Footer";
import AnalyticsSection from "../src/sections/analytics";
import AppointmentsSection from "../src/sections/appointments";
import BrowserSupportSection from "../src/sections/browserSupport";
import FaqSection from "../src/sections/faq";
import LandingSection from "../src/sections/landing";
import PatientsSection from "../src/sections/patients";
import SecureSection from "../src/sections/secure";

const IndexPage: NextPage = () => {
  return (
    <>
      <LandingSection></LandingSection>
      {/* <AnalyticsSection></AnalyticsSection>
      <AppointmentsSection></AppointmentsSection>
      <PatientsSection></PatientsSection> */}
      <BrowserSupportSection></BrowserSupportSection>
      <SecureSection></SecureSection>
      <FaqSection></FaqSection>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
