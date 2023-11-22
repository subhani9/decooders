import React from "react";
import heromain from "../assets/hero-bg.png";
import heromobile from "../assets/hero-bg-mobile.png";
import { IoChevronDownOutline } from "react-icons/io5";
import About from "../assets/About-main.png";
import Layout from "../components/Layout.jsx";

const Hero = () => {
  return (
    <Layout title={"Decooders/Home"}>
      {/* Hero */}
      <div>
        <div className="w-full h-screen mt-[-15px] ">
          <img src={heromain} alt="hero" className="hidden md:block w-full" />
          <img src={heromobile} alt="hero" className="w-full md:hidden" />
          <div className="text-sm text-center font-medium text-[#5C6368] md:mt-[-60px] mt-[-100px] md:text-[12px]">
            Decooders is a UI/UX design and developing Company in Hyderabad.
          </div>
          <IoChevronDownOutline
            size={20}
            className="text-[#F02036] items-center justify-center text-center max-w-full w-full"
          />

          {/* About */}
          <div className="max-w-full mx-auto w-full py-16 px-[20px] mt-4 md:mt-10 md:px-[80px]  space-between">
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row space-between">
              <div className="w-full mx-auto my-4 ">
                <p className="text-[12px] text-[#5D5D5D] font-medium">
                  What we are?
                </p>
                <p className="text-4xl font-bold pt-1 uppercase">
                  The Story Of Decood
                  <span className="text-[#F02036]">ers.</span>
                </p>
                <p className="text-[#5D5D5D] text-[13px] font-medium pt-6 w-[100%]">
                  In the early days of May 2022, a group of passionate
                  individuals with a shared vision for the future of technology
                  came together to establish a startup named "Decooders." The
                  founders, each bringing a unique set of skills and
                  experiences, were driven by the belief that the internet and
                  mobile applications would shape the future of business and
                  communication.
                  <br />
                  <br /> The initial days were challenging, with the team
                  working out of a small garage, fueled by ambition and a desire
                  to create something extraordinary. They focused on web design
                  and development, creating static websites during a time when
                  the digital landscape was just starting to evolve.
                  <br />
                  <br />A dynamic team of creative minds founded "Decooders" a
                  startup with a vision to redefine digital experiences through
                  innovative web and app design and development. The founders,
                  fresh out of university and fueled by a shared passion for
                  technology, set up their workspace in a collaborative
                  co-working environment.
                </p>
                <a className="text-[#F02036] text-[12px] font-medium pt-4">
                  Meet Our Decooders......
                </a>
              </div>

              <img
                src={About}
                alt="About-Image"
                className="w-full md:w-[30%] md:py-10"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
