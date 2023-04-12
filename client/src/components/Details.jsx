import React from "react";
import { detailsList } from "../constants";

export const Details = () => {
  return (
    <div className="px-6 md:px-24">
      <div className="  flex flex-col items-center  gap-12  justify-center ">
        <div className="max-w-[600px] ">
          <p className="text-center font-medium text-base font-bodyFont md:text-lg">
            The rumors are true. I create user-friendly, cutting-edge websites
            that showcase your brand, dazzle your target market, and give
            legitimacy to your  business.
          </p>
        </div>
        <div className="flex w-full mb-[100px] md:mb-0">
          <div className="flex flex-col md:flex-row justify-between w-full">
            {detailsList.map((det) => (
              <div
                className="w-full flex items-center flex-col gap-x-5 justify-center mb-10 md:mb-0 "
                key={det.id}
              >
                <div className="w-[50px] h-[50px] bg-[#222222] relative  rounded-full">
                  <span className="flex w-full h-full text-[#27AE60]  text-2xl justify-center items-center ">
                    {det.icon}
                  </span>
                </div>
                <h1 className=" mt-5 font-bold text-lg">{det.name}</h1>
                <h1 className="font-titleFont text-lg">{det.text}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
