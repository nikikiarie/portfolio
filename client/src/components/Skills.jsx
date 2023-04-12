import React from "react";
import { SkillsList } from "../constants";

const Skills = () => {
  return (
    <section id='services' className="px-24 py-20 my-10">
      <div className="w-full h-[60vh] flex gap-7 justify-evenly items-center flex-col">
        <h2 className="text-center text-4xl font-bold font-titleFont">
          What I do
        </h2>
        <div className="w-full">
          <div className="grid md:grid-cols-3 gap-12">
            {SkillsList.map((skill) => (
              <div key={skill.id} className="flex rounded-md flex-col gap-5 py-5 bg-[#91919134] items-center justify-center">
                <div className="flex  flex-col gap-y-8">
                  <img src={skill.icon} className="w-[60px] h[60px]" />
                </div>
                <p className="font-titleFont text-[18px]">{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
