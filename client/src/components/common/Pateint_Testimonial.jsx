import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../../data/testimonial";

// Reusable Testimonial Slider Component
const TestimonialSlider = ({ slidesPerView, width }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={30}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className={`mySwiper mx-auto ${width}`}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide
          key={index}
          className="bg-white p-6 pb-10 border border-borderclr rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-x-5">
            <img
              src={testimonial.image}
              alt={`Photo of ${testimonial.name}`}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xl text-bgprimary font-semibold">
                {testimonial.name}
              </span>
              <span className="text-gray-700">{testimonial.role}</span>
            </div>
          </div>
          <div className="mt-6 text-lg text-gray-700 italic">
            <p>"{testimonial.feedback}"</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

function PatientTestimonial() {
  return (
    <div className="bg-bgprimary py-20">
      <div className="container mx-auto px-3 md:px-0">
        <p className="text-xl tracking-widest uppercase text-textsecondary">
          Testimonials
        </p>
        <h2 className="md:text-5xl text-3xl text-textprimary font-semibold">
          What Our Patients Say About Us
        </h2>
      </div>

      <div className="mt-16">
        {/* Large screens: Show 3 slides */}
        <div className="hidden md:block">
          <TestimonialSlider
            slidesPerView={3}
            width="md:w-[1000px] xl:w-[1200px]"
          />
        </div>

        {/* Small screens: Show 1 slide */}
        <div className="block md:hidden">
          <TestimonialSlider slidesPerView={1} width="w-[350px] sm:w-[450px]" />
        </div>
      </div>
    </div>
  );
}

export default PatientTestimonial;
