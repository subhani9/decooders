import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
// import Footer from "./Footer";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Decooders",
  description:
    "Transforming ideas into digital experiences! 🚀 Decooders is a leading IT company specializing in website development and innovative app solutions. Our expert team of developers creates seamless, user-friendly platforms tailored to your unique needs. Elevate your online presence with cutting-edge technology. Let's bring your vision to life together! 💻📱 #WebDevelopment #AppDevelopment #TechInnovation",
  keywords:
    " UI/UX Design, Web Development, App Development, Mobile App Development, Hyderabad, IT Solutions, Software Development, Custom Websites, E-commerce Solutions, Android App Development, iOS App Development, Responsive Web Design, Digital Transformation, Technology Consulting, Hyderabad Tech Company, IT Services, Software Solutions",
};
export default Layout;
