import type { NextPage } from "next";
import Footer from "../components/Footer";
import AnalyticsSection from "../src/sections/analytics";
import AppointmentsSection from "../src/sections/appointments";
import BrowserSupportSection from "../src/sections/browserSupport";
import AdvantagesSection from "../src/sections/advantages";
import FaqSection from "../src/sections/faq";
import LandingSection from "../src/sections/landing";
import PatientsSection from "../src/sections/patients";
import SecureSection from "../src/sections/secure";

const IndexPage: NextPage = () => {
  return (
    <>
      <LandingSection></LandingSection>
      <AdvantagesSection></AdvantagesSection>
      {/* <AnalyticsSection></AnalyticsSection>
      <AppointmentsSection></AppointmentsSection> */}
      <BrowserSupportSection></BrowserSupportSection>
      <PatientsSection></PatientsSection>
      <SecureSection></SecureSection>
      {/* <FaqSection></FaqSection> */}
      <Footer></Footer>
    </>
  );
};

export default IndexPage;
