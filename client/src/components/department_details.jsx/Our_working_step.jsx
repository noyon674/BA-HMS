import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHandshake,
  faHeartCircleCheck,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

function Our_working_step() {
  return (
    <div className="lg:mt-32 lg:pb-32">
      <div className="container mx-auto">
        <p className="text-center text-xl uppercase tracking-widest text-textsecondary pb-3">
          Our step
        </p>
        <h2 className="text-center text-4xl font-semibold text-bgprimary">
          Our Working Best Working Processs.
        </h2>
        <div className="w-[1250px] mx-auto grid grid-cols-2 lg:mt-20">
          <div className="bg-borderbg px-10 pt-14 pb-10">
            <p>
              <FontAwesomeIcon
                className="text-4xl text-textprimary"
                icon={faMessage}
              />
            </p>
            <h5 className="text-2xl font-semibold text-textprimary my-2">
              Free Consultation
            </h5>
            <p className="text-lg text-textprimary font-semibold">
              Expert advice for your health concerns, no cost involved. Schedule
              now!
            </p>
            <h5 className="text-3xl text-textprimary font-semibold text-right">
              01
            </h5>
          </div>
          <div className="bg-bgprimary px-10 pt-14 pb-10">
            <p>
              <FontAwesomeIcon
                className="text-4xl text-textprimary"
                icon={faClock}
              />
            </p>
            <h5 className="text-2xl font-semibold text-textprimary my-2">
              Schedule Date & Time
            </h5>
            <p className="text-lg text-textprimary font-semibold">
              Book your appointment online and choose your preferred date and
              time for a convenient
            </p>
            <h5 className="text-3xl text-textprimary font-semibold text-right">
              02
            </h5>
          </div>
        </div>
        <div className="w-[1250px] mx-auto grid grid-cols-2">
          <div className="bg-bgprimary px-10 pt-14 pb-10">
            <p>
              <FontAwesomeIcon
                className="text-4xl text-textprimary"
                icon={faHandshake}
              />
            </p>
            <h5 className="text-2xl font-semibold text-textprimary my-2">
              Arrivol To DentiCore
            </h5>
            <p className="text-lg text-textprimary font-semibold">
              your premier destination for comprehensive dental care. Experience
              exceptional treatments.
            </p>
            <h5 className="text-3xl text-textprimary font-semibold text-right">
              03
            </h5>
          </div>
          <div className="bg-borderbg px-10 pt-14 pb-10">
            <p>
              <FontAwesomeIcon
                className="text-4xl text-textprimary"
                icon={faHeartCircleCheck}
              />
            </p>
            <h5 className="text-2xl font-semibold text-textprimary my-2">
              Follow Up Check
            </h5>
            <p className="text-lg text-textprimary font-semibold">
              Ensure your health progress with our comprehensive follow-up
              examinations, personalized care.
            </p>
            <h5 className="text-3xl text-textprimary font-semibold text-right">
              04
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Our_working_step;
