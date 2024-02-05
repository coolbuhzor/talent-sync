"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MinusIcon from "@/assets/svg/minus.svg";
import PlusIcon from "@/assets/svg/plus.svg";
import { faqData } from "@/utils/constants";

const Faq = () => {
  const [toggleItems, setToggleItems] = useState<number>(1);

  const handleToggleItem = (itemId: number) => {
    setToggleItems(itemId === toggleItems ? 0 : itemId);
  };

  return (
    <section className="w-full flex justify-center">
      <div className="flex lg:flex-row flex-col lg:gap-x-5 justify-between lg:items-start 2xl:w-[90%] w-full 2xl:px-0 lg:px-20 px-4 py-20">
        <div className="w-full xl:w-[40%] lg:w-[45%] md:text-left text-center lg:mb-0 mb-14">
          <h5 className="text-blue-700 overflow-hidden text-lg leading-7 font-semibold">
            Support
          </h5>
          <h2 className="font-semibold -tracking-[2%] text-gray-800 sm:text-5xl text-[30px] overflow-hidden sm:leading-[60px] py-2">
            FAQS
          </h2>
          <p className="text-gray-500 text-2xl overflow-hidden leading-8 font-normal">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <Link href="" className="border-b cursor-pointer border-gray-500">
              chat to our friendly team.
            </Link>
          </p>
        </div>

        <div className="last:mb-0 lg:w-[55%] w-full last:border-b-0">
          {faqData.map(
            (item: { id: number; question: string; answer: string }) => (
              <div
                className={`${
                  toggleItems === item.id
                    ? "bg-gray-200 border"
                    : "bg-white border-b"
                } lg:mb-4 mb-6 cursor-pointer py-6 px-7 rounded-2xl w-full border-gray-200`}
                key={item.id}
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => handleToggleItem(item.id)}
                >
                  <p className="text-gray-900 font-semibold sm:text-xl text-[15px] overflow-hidden sm:leading-[30px]">
                    {item.question}
                  </p>

                  <Image
                    src={toggleItems === item.id ? MinusIcon : PlusIcon}
                    alt={`${
                      toggleItems === item.id ? "Minus Icon" : "Plus Icon"
                    }`}
                    width={24}
                    height={24}
                    priority={true}
                  />
                </div>

                {toggleItems === item.id && (
                  <p className="text-gray-600 sm:text-lg text-[13px] font-normal sm:leading-7 overflow-hidden pt-[10px]">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
