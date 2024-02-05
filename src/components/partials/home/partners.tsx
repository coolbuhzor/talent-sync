import React, { Fragment } from "react";
import Image from "next/image";
import { partnersLogo } from "@/utils/constants";

const Partners = () => {
  return (
    <section className="pb-20 pt-10 font-inter flex flex-col justify-center items-center w-full">
      <div className="2xl:w-[90%] 2xl:px-0 lg:px-20 px-4 w-full">
        <h5 className="font-medium text-center text-xl leading-[30px] text-gray-600 pb-12 overflow-hidden">
          Join 1,500+ companies already video conferencing the ClearLink way
        </h5>

        <div className="w-full flex xl:gap-0 gap-5 lg:justify-around justify-center items-center lg:flex-nowrap flex-wrap">
          {partnersLogo.map((item) => (
            <Fragment key={item.id}>
              <Image src={item.src} alt="Partners Logo" />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
