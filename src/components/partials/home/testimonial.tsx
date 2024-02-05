import React from "react";
import Image from "next/image";

// import Star from "@/assets/icons/star.png";
import Star from "@/assets/svg/star.svg";
import ShopifyIcon from "@/assets/svg/shopify.svg";
import Sarah from "@/assets/svg/sarah-avatar.svg";
import LeftArrow from "@/assets/svg/left-arrow.svg";
import LaptopPeople from "@/assets/svg/testimonial-ppl.svg";

const Testimonial = () => {
  return (
    <section className="pb-20 bg-gray-50 lg:pt-16 pt-10 font-inter flex flex-col justify-center items-center w-full">
      <div className="2xl:w-[90%] 2xl:px-0 lg:px-20 px-4 w-full grid lg:grid-cols-2 items-center lg:gap-8 gap-10">
        <div className="w-full">
          <Image src={ShopifyIcon} alt="Shopify Logo" />
          <div className="flex gap-1 items-center my-10">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Image src={Star} alt="Rating" key={i} width={20} height={20} />
              ))}
          </div>

          <h2 className="font-medium sm:text-[44px] text-[30px] sm:leading-[60px] -tracking-[2%] pb-8 overflow-hidden">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h2>

          <div className="flex sm:flex-row flex-col gap-8 justify-between w-full">
            {/* Sarah Details */}
            <div className="flex gap-2 items-center">
              <Image src={Sarah} alt="Sarah Avatar" />
              <div className="flex flex-col gap-1">
                <h5 className="text-gray-900 font-semibold text-xl leading-[30px] overflow-hidden">
                  Sarah Thompson
                </h5>
                <p className="text-gray-600 font-normal text-lg leading-7 overflow-hidden">
                  Project Manager, Shopify
                </p>
              </div>
            </div>
            {/* Sarah Details End */}

            {/* Two Arrow */}
            <div className="flex gap-7 justify-center">
              <div role="button" className="hover:scale-90">
                <Image src={LeftArrow} alt="Left Arrow" />
              </div>
              <div role="button" className="hover:scale-90">
                <Image
                  src={LeftArrow}
                  alt="Left Arrow"
                  className="rotate-180"
                />

                {/* <Image src={RighttArrow} alt="Right Arrow" /> */}
              </div>
            </div>
            {/* Two Arrow End */}
          </div>
        </div>

        <div className="">
          <Image
            src={LaptopPeople}
            alt="Laptop and People"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
