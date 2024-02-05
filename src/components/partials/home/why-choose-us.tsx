import React from "react";
import Image from "next/image";

import { whyChooseUsData } from "@/utils/constants";
import GroupPeople from "@/assets/svg/group.svg";
import BlueArrow from "@/assets/svg/arrow.svg";

const WhyChooseUs = () => {
  return (
    <section className="pb-20 lg:pt-16 pt-10 font-inter flex flex-col justify-center items-center w-full">
      <div className="2xl:w-[90%] 2xl:px-0 lg:px-20 px-4 w-full">
        <div className="lg:w-[820px] pb-16 w-full">
          <h6 className="text-blue-700 font-semibold text-lg leading-7 overflow-hidden">
            The ClearLink Advantage
          </h6>
          <h2 className="-tracking-[2%] font-semibold sm:text-5xl text-[30px] sm:leading-[60px] pt-2 text-gray-800 pb-4 overflow-hidden">
            Why choose ClearLink?
          </h2>
          <p className="font-normal text-2xl leading-8 overflow-hidden text-gray-500">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-8 w-full items-start justify-between">
          <div className="grid sm:grid-cols-2 xl:gap-12 sm:gap-x-5 gap-y-12 w-full">
            {/* Each Item */}
            {whyChooseUsData.map((item) => (
              <div key={item.id}>
                <div>
                  <Image src={item.src} alt="Icons" />
                </div>
                <h4 className="text-gray-900 font-semibold text-2xl leading-8 overflow-hidden pt-4 pb-3">
                  {item.heading}
                </h4>
                <p className="font-normal text-xl text-gray-600 leading-7 overflow-hidden">
                  {item.desc}
                </p>
              </div>
            ))}
            {/* Each Item End */}
          </div>
          <div className="w-full lg:py-0 pt-44 pb-8 flex flex-col items-center">
            <Image
              src={BlueArrow}
              alt="Arrow"
              className="absolute z-10 -mt-52"
            />
            <Image
              src={GroupPeople}
              alt="Group Of People"
              className="relative w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
