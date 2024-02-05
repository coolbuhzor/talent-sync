import React from "react";
import Link from "next/link";
import Image from "next/image";

import LinkedIn from "@/assets/svg/linked-in.svg";
import Twitter from "@/assets/svg/twitter.svg";
import Facebook from "@/assets/svg/facebook.svg";
import Instagram from "@/assets/svg/insta.svg";
import Github from "@/assets/svg/github.svg";
import Youtube from "@/assets/svg/youtube.svg";

import Logo from "@/assets/svg/logo.svg";

import AppStore from "@/assets/svg/app-store.svg";
import GoogleStore from "@/assets/svg/google.svg";

const Footer = () => {
  return (
    <footer className="font-inter flex flex-col justify-center items-center w-full">
      <div className="2xl:w-[90%] 2xl:px-0 lg:px-20 px-4 pt-8 w-full lg:flex-row flex-col flex items-start justify-between lg:gap-14 gap-8">
        <div className="xl:w-[400px] lg:w-[300px] w-full">
          <Link href="/" aria-label="Home" title="Home Page">
            <Image src={Logo} priority alt="Clear-Link Home" />
          </Link>
          <p className="pt-5 text-gray-600 font-normal text-lg overflow-hidden leading-7">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>

        <div className="grid sm:grid-cols-5 xs:grid-cols-3 grid-cols-2 items-start justify-between sm:gap-6 gap-y-8 lg:w-auto w-full">
          {/* Product Sec */}
          <div className="w-full">
            <h4 className="text-gray-500 font-semibold text-base overflow-hidden leading-6 pb-1.5">
              Product
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Overview
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Features
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Solutions
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Tutorials
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Pricing
              </Link>
            </div>
          </div>
          {/* Product Sec End */}

          {/* Company Sec */}
          <div className="w-full">
            <h4 className="text-gray-500 font-semibold text-base overflow-hidden leading-6 pb-1.5">
              Company
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                About us
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Careers
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Press
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                News
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Company Sec End */}

          {/* Resources Sec */}
          <div className="w-full">
            <h4 className="text-gray-500 font-semibold text-base overflow-hidden leading-6 pb-1.5">
              Resources
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Blog
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Events
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Help centre
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Tutorials
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Support
              </Link>
            </div>
          </div>
          {/* Resources Sec End */}

          {/* Legal Sec */}
          <div className="w-full">
            <h4 className="text-gray-500 font-semibold text-base overflow-hidden leading-6 pb-1.5">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Terms
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Privacy
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Cookies
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Licenses
              </Link>
              <Link
                href={"#"}
                className="text-gray-600 font-semibold text-lg overflow-hidden leading-7"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Legal Sec End */}

          {/* Get the app Sec */}
          <div className="w-full">
            <h4 className="text-[#004EEB] font-semibold text-base overflow-hidden leading-6 pb-1.5">
              Get the app
            </h4>
            <div className="flex flex-col gap-3">
              <Link href={"#"} rel="noreferrer">
                <Image src={AppStore} alt="AppStore Icon" />
              </Link>
              <Link href={"#"} rel="noreferrer">
                <Image src={GoogleStore} alt="GoogleStore Icon" />
              </Link>
            </div>
          </div>
          {/* Get the app Sec End */}
        </div>
      </div>

      <section className="bg-gray-50 w-full py-9 mt-10">
        <div className="2xl:w-[90%] 2xl:px-0 lg:px-20 px-4 w-full flex lg:flex-row flex-col items-center justify-between gap-6">
          <div className="text-gray-500 font-normal lg:text-left text-center overflow-hidden text-base leading-6">
            © {new Date().getFullYear()} ClearLink. All rights reserved.
          </div>

          <div className="flex sm:flex-nowrap flex-wrap justify-center gap-4 items-center">
            <Link href={"#"} rel="noreferrer">
              <Image src={LinkedIn} alt="LinkedIn Icon" />
            </Link>
            <Link href={"#"} rel="noreferrer">
              <Image src={Twitter} alt="Twitter Icon" />
            </Link>
            <Link href={"#"} rel="noreferrer">
              <Image src={Facebook} alt="Facebook Icon" />
            </Link>
            <Link href={"#"} rel="noreferrer">
              <Image src={Instagram} alt="Instagram Icon" />
            </Link>
            <Link href={"#"} rel="noreferrer">
              <Image src={Github} alt="Github Icon" />
            </Link>
            <Link href={"#"} rel="noreferrer">
              <Image src={Youtube} alt="Youtube Icon" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
