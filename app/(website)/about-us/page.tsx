import AboutBanner from "@/components/About-page/AboutBanner";
import AboutUs from "@/components/About-page/AboutUs";
import KeyMember from "@/components/About-page/KeyMember";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us | Innovators in IoT Dashboards and Gateways | EdgeSense",
  description: "Explore EdgeSense’s journey from a tech startup to a leader in IoT solutions. We specialize in IoT dashboards and gateways designed to optimize operations.",
  robots: {
    index: true, // Allow search engines to index this page
    follow: true // Allow search engines to follow links on this page
  }
};



const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us" },
];



const AboutPage = () => (
  <>
    <AboutBanner
      breadcrumb={breadcrumbItems}
      heading="Transforming Industries with Advanced IoT Dashboards and Gateways"
      pagename="About Us"
      imageUrl="/about-banner.png"
    />
    <AboutUs />
    <KeyMember />
  </>
);

export default AboutPage;
