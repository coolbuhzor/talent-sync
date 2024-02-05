import React from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

import Robot from "@/assets/svg/robot.svg";
import HeroImg from "@/assets/svg/hero-right.svg";
import Star from "@/assets/svg/star.svg";

import { reviewsImg } from "@/utils/constants";

const Hero = () => {
  return (
    <section className="w-full bg-hero-bg bg-cover bg-center font-inter flex flex-col justify-center items-center">
      <div className="2xl:w-[90%] w-full 2xl:px-0 lg:px-20 px-4 lg:gap-0 gap-8 grid lg:grid-cols-2 2xl:items-center lg:pb-20 lg:pt-[250px] pt-[200px]">
        {/* Hero Desc Sec */}
        <div className="w-full">
          <h1 className="font-semibold text-gray-800 pb-5 -tracking-[2%] xl:leading-[72px] leading-[52px] xl:text-[64px] text-5xl overflow-hidden">
            Uniting the world, one video call at a time
          </h1>
          <p className="text-gray-500 xl:text-2xl text-xl font-normal overflow-hidden leading-8">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>

          <div className="flex sm:flex-row flex-col sm:gap-3 gap-8 w-full sm:items-center py-10">
            <Button
              primary
              className="transition-all ease-in-out hover:scale-90 hover:border-none xl:w-[221px] sm:w-[200px] w-full h-[60px]"
            >
              Start your free trial
            </Button>

            <div className="h-7 flex gap-2 items-center justify-center hover:scale-90 cursor-pointer sm:w-auto w-full overflow-hidden">
              <div>
                <Image
                  src={Robot}
                  alt="robot"
                  priority
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-blue-700 font-semibold text-lg overflow-hidden leading-7">
                Discover AI assistant
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-3 items-center">
            <div className="flex">
              {reviewsImg.map((item) => (
                <div key={item.id} className="first:ml-0 -ml-4">
                  <Image src={item.src} alt="Dp" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Image
                      src={Star}
                      alt="Rating"
                      key={i}
                      width={20}
                      height={20}
                    />
                  ))}

                <p className="text-gray-700 pl-0.5 overflow-hidden font-semibold leading-6 text-base">
                  5.0
                </p>
              </div>

              <div className="text-gray-600 font-medium leading-6 text-base">
                from 3,000+ reviews
              </div>
            </div>
          </div>
        </div>
        {/* Hero Desc Sec End */}

        {/* Image sec */}
        <div className="w-full">
          <Image src={HeroImg} alt="Hero" className="w-full" />
        </div>
        {/* Image sec End */}
      </div>
    </section>
  );
};

export default Hero;
