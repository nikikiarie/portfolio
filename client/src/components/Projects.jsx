import React from "react";
import mockup from "../assets/mockup.png";
import mockup2 from "../assets/mockup2.png";
import mockup3 from "../assets/mockup3.png";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <section className="px-10 mt-32 md:mt-0 md:px-24 py-10 my-10">
      <div className="w-full text-white flex justify-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="max-w-[600px] flex flex-col justify-center">
            <h2 className="text-center text-4xl font-bold font-titleFont mb-2">
              Recent Projects
            </h2>
            <p className="text-center text-lg leading-[16px] text-gray-400">
              Here's a selection of the websites I've worked on over the last
              year.
            </p>
          </div>
          <div className="flex flex-col md:grid grid-cols-2 gap-5 ">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-5">
                <div className="flex justify-center text-3xl">
              <AiFillGithub/>
</div>
                <h2 className="text-lg text-gray-400">E-commerce</h2>
                
                <div>
                </div>
              </div>
              <div>
                <img src={mockup3} alt="hfgj" className="h-[250px]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
            <div className="mb-5">
            <div className="flex justify-center text-3xl">
              <AiFillGithub/>
</div>
                <h2 className="text-lg text-gray-400">Social Media</h2>
              </div>
              <div>
              <img src={mockup2} alt="hfgj" className="h-[250px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
