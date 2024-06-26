import React from "react";
import CarPng from "../../assets/car1.png";
import AppStoreBanner from "../AppStoreBanner/AppStoreBanner";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Welcome to Auto Station, your trusted car rental hub in vibrant Dubai! We offer a wide range of high-quality vehicles at competitive rates, ensuring a smooth ride whether you're here for business or leisure. With our commitment to top-notch service and convenience, Auto Station is dedicated to making your travels in Dubai seamless and enjoyable
              </p>
              <p data-aos="fade-up">
              Choose us for a hassle-free car rental experience!
              </p>
              <button 
  data-aos="fade-up" 
  onClick={() => {
    AOS.refresh();
    window.location.hash = "#AppStoreBanner";  // Change this to the actual ID you need to navigate to
  }}
  className="button-outline"
>
  Get Started
</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
