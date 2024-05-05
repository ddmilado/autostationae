import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  // {
  //   title: "Blog",
  //   link: "/#blog",
  // },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-m font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Auto Station
            </h1>
            <h1 className="sm:text-m text-m font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              by Paul Kitu Rental Car LLC
            </h1>
            <p className="text-sm">
            Your trusted companion for hassle-free car rentals in Dubai. Contact us for the best rates and exceptional service. Let's drive your journey forward together!{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>106, DBC Building, P.O Box 22122, Al Khubaisi Area, Dubai, Unite Arab Emirates.</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+971 54 8883606</p>
              <p>+971 4 4469728</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="www.instagram.com">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="www.fb.com">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="www.linkedin.com">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            {/* <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
