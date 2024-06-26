import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import chevy from "../../assets/chevy.png";
import optima1 from "../../assets/optima1.png";
import picanto1 from "../../assets/picanto1.png";
import sonata2 from "../../assets/sonata2.png";
import About from "../About/About";
import AppStoreBanner from "../AppStoreBanner/AppStoreBanner";


const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "CHEVROLET",
    price: 100,
    image: chevy,
    aosDelay: "1000",
  },
  {
    name: "KIA OPTIMA",
    price: 140,
    image: optima1,
    aosDelay: "500",
  },
  {
    name: "KIA PICANTO",
    price: 100,
    image: picanto1,
    aosDelay: "1000",
  },
  {
    name: "HYUNDAI SONATA",
    price: 140,
    image: sonata2,
    aosDelay: "500",
  },
  
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Explore Our Fleet
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
        Discover the perfect vehicle for your needs from our extensive selection of top-tier cars, each detailed with features and pricing to help you make an informed choice.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>AED {data.price}/Day</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  12Km
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" 
              onClick={() => {
                AOS.refreshHard();
                window.location.hash = "#AppStoreBanner"
              }}
          className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
