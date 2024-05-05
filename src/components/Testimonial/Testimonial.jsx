import React from "react";

const testimonialData = [
  {
    name: "John",
    image: "https://res.cloudinary.com/dzh8mryxw/image/upload/v1714802497/photo-1590086782792-42dd2350140d_mtf8zm.avif", // Add the URL of John's image
    description: "Effortless booking and stellar service! Auto Station made my business trip a breeze with their reliable and prompt service. Highly recommended!",
    aosDelay: "0",
  },
  {
    name: "Sarah",
    image: "https://res.cloudinary.com/dzh8mryxw/image/upload/v1714802493/premium_photo-1664442593321-24b9e3c69238_fltafy.avif", // Add the URL of Sarah's image
    description: "I've rented cars from many places in Dubai, but Auto Station offers the best prices and the most courteous staff. They made our family vacation stress-free and enjoyable!",
    aosDelay: "300",
  },
  {
    name: "Ahmed",
    image: "https://res.cloudinary.com/dzh8mryxw/image/upload/v1714802332/photo-1592994238317-fcf75c5466fd_xxvu0b.avif", // Add the URL of Ahmed's image
    description: "From selection to return, everything was smooth and efficient. The car was in excellent condition and the staff was incredibly helpful. Auto Station is definitely my go-to car rental now!",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              At Auto Station, we take pride in our service and nothing speaks louder than the feedback from our satisfied customers. Read their experiences to see why we are the preferred choice for car rentals in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((testimonial) => (
              <div
                key={testimonial.name}
                data-aos="fade-up"
                data-aos-delay={testimonial.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg "
              >
                <div className="grid place-items-center">
                  <img
                    src={testimonial.image} // use the image URL from the testimonial data
                    alt={`Image of ${testimonial.name}`}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{testimonial.description}</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;