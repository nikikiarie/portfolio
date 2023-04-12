import React, { useState } from "react";
import mockup2 from "../assets/mockup2.png";
import mockup3 from "../assets/mockup3.png";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageTwo, setShowMessageTwo] = useState(false);

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
                <div className="flex justify-center text-3xl"></div>
                <h2 className="text-lg text-gray-400">E-commerce</h2>
              </div>
              <div
                className="relative hover:shadow-inner"
                onMouseEnter={() => {
                  setShowMessage(true);
                }}
                onMouseLeave={() => {
                  setShowMessage(false);
                }}
              >
                <img src={mockup3} alt="hfgj" className="h-[250px]" />
                {showMessage && (
                  <div className="absolute flex items-center justify-center w-full h-full top-0 left-0">
                    <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
                      <a
                        href="https://maroon-crayfish-fez.cyclic.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h1 className="text-[#27AE60] text-lg flex items-center underline font-extrabold">
                          Live
                          <span>
                            <FiArrowUpRight />
                          </span>
                        </h1>
                      </a>
                      <a
                        href="https://github.com/nikikiarie/socia"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="text-2xl">
                          <AiFillGithub />
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-5 md:mt-0">
              <div className="mb-5">
                <div className="flex justify-center text-3xl"></div>
                <h2 className="text-lg text-gray-400">Social Media</h2>
              </div>
              <div
                className="relative hover:shadow-inner"
                onMouseEnter={() => {
                  setShowMessageTwo(true);
                }}
                onMouseLeave={() => {
                  setShowMessageTwo(false);
                }}
              >
                <img src={mockup2} alt="hfgj" className="h-[250px]" />
                {showMessageTwo && (
                  <div className="absolute flex items-center justify-center w-full h-full top-0 left-0">
                    <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
                      <a
                        href="https://fair-ruby-lemming-kilt.cyclic.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h1 className="text-[#27AE60] text-lg flex items-center underline font-extrabold">
                          Live
                          <span>
                            <FiArrowUpRight />
                          </span>
                        </h1>
                      </a>
                      <a
                        href="https://github.com/nikikiarie/mern_commerce_cyclic"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="text-2xl">
                          <AiFillGithub />
                        </span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
