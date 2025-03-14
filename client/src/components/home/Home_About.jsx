import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Home_About() {
  return (
    <div className="bg-bgsecondary py-20">
      <div className="container mx-auto flex flex-col xl:flex-row items-center ">
        <div className="basis-1/2 flex items-center">
          <div className="">
            <img src="./img/hero-img-1.jpg" alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img
              src="./img/hero-img-2.jpg"
              alt=""
              className="rounded-full w-2/3"
            />
            <video
              height={200}
              width={400}
              autoPlay
              className="rounded-full"
              loop
            >
              <source
                src="./video/5998353-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col lg:flex-row xl:flex-col items-center xl:items-start gap-5">
          <div className="px-5 sm:px-0">
            <p className="text-xl uppercase tracking-widest font-semibold text-textsecondary py-5">
              About Medicalife
            </p>
            <h2 className="text-5xl sm:w-[450px] font-semibold text-gray-700">
              Our Best Services & Poplular Treatment Here
            </h2>
            <p className="text-xl mt-20 sm:w-[450px] text-gray-500 xl:block hidden">
              We take pride in offering a wide range of best-in-class medical
              services and popular treatments to cater to your diverse
              healthcare needs.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-5 px-5 sm:px-0">
            <p className="text-xl mt-10 sm:w-[450px] text-gray-500 xl:hidden">
              We take pride in offering a wide range of best-in-class medical
              services and popular treatments to cater to your diverse
              healthcare needs.
            </p>
            <p className="flex items-center gap-2 text-xl">
              <span className="text-textsecondary font-semibold">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span className="text-gray-800 font-semibold">
                Mental health Solutions
              </span>
            </p>
            <p className="flex items-center gap-2 text-xl">
              <span className="text-textsecondary font-semibold">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span className="text-gray-800 font-semibold">
                Rapid Patient Improvement
              </span>
            </p>
            <p className="flex items-center gap-2 text-xl">
              <span className="text-textsecondary font-semibold">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span className="text-gray-800 font-semibold">
                World Class Treatment
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_About;
