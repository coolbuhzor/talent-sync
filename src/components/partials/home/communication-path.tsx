import React from "react";
import Image from "next/image";

import Button from "@/components/ui/button";
import BlueCheck from "@/assets/svg/check.svg";
import ChatPeople from "@/assets/svg/chat-people.svg";

const CommunicationPath = () => {
  return (
    <section className="pb-20 lg:pt-16 sm:pt-10 font-inter flex flex-col justify-center items-center w-full">
      <div className="2xl:w-[90%] 2xl:px-0 lg:pl-20 lg:pr-0 px-4 w-full grid lg:grid-cols-2 items-start lg:gap-8 gap-10">
        <div className="xl:pt-10 w-full">
          <h2 className="overflow-hidden font-semibold sm:text-5xl text-[30px] sm:leading-[60px] -tracking-[2%] pb-5">
            Ready to clear the path to perfect communication?
          </h2>

          <div className="pl-4 flex flex-col gap-4 pb-8">
            <div className="flex gap-2 items-center">
              <div>
                <Image src={BlueCheck} alt="Blue Check" />
              </div>

              <div className="font-normal overflow-hidden text-gray-600 text-base sm:leading-8 sm:text-2xl">
                30 days free trial
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <Image src={BlueCheck} alt="Blue Check" />
              </div>

              <div className="font-normal overflow-hidden text-gray-600 text-base sm:leading-8 sm:text-2xl">
                Cancel at any time
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <Image src={BlueCheck} alt="Blue Check" />
              </div>

              <div className="font-normal overflow-hidden text-gray-600 text-base sm:leading-8 sm:text-2xl">
                Access to all features
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <Image src={BlueCheck} alt="Blue Check" />
              </div>

              <div className="font-normal overflow-hidden text-gray-600 text-base sm:leading-8 sm:text-2xl">
                Peronalized onboarding
              </div>
            </div>
          </div>

          <div className="flex sm:items-center sm:flex-row flex-col sm:gap-2 gap-5">
            <Button className="transition-all lg:w-36 h-[52px] w-full ease-in-out hover:scale-95 hover:border-none">
              Talk to sales
            </Button>
            <Button
              primary
              className="transition-all ease-in-out hover:scale-95 hover:border-none lg:w-[195px] w-full h-[52px]"
            >
              Start your free trial
            </Button>
          </div>
        </div>

        <div className="w-full">
          <Image src={ChatPeople} alt="Blue Check" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default CommunicationPath;
