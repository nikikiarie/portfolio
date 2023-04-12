import React from "react";
import img from "../assets/nick.svg";

const Hero = () => {
  return (
    <section
      id="aboutme"
      className="flex items-center px-6 md:px-24 w-full h-auto  md:h-[100vh] "
    >
      <div className="w-full  grid md:grid-cols-2 ">
        <div className="flex  py-16 justify-center flex-col  gap-5  md:py-0">
          <div className="flex flex-col md:flex ">
            <p className=" text-[26px] text-left font-bold font-titleFont text-[#b9b9b9] md:text-[48px]">
              {" "}
              Hi, I am
              <br />
            </p>
            <span className=" font-bold text-[38px] leading-[36px] md:text-[50px]  md:leading-10">
              Kiarie Ng'ang'a
            </span>
          </div>
          <p className="text-left text-lg text-[#ffffffcf] font-medium">
            Full Stack Developer
          </p>
          <div className="flex  items-center ">
            <button className=" bg-[#27AE60] py-2 px-4 rounded-sm font-bodyFont ">
              Download Cv
            </button>
            <button className=" ml-4 border border-[#b9b9b9] py-2 px-4 rounded-sm font-bodyFont ">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:flex mt-10  items-center justify-center md:mt-0 ">
          <div className="" />
          <img src={img} alt="" className="w-[400px] h-[400px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
