import React from "react";

function ContactForm() {
  return (
    <div className="contactForm lg:h-[87vh] h-[100vh] w-full relative">
      <div className="absolute overlay">
        <div className="lg:w-[1200px] mx-auto">
          <div className="pt-20 text-white text-center">
            <p className="text-lg lg:text-xl tracking-widest uppercase font-semibold">
              Fill The Form
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-wider mt-3">
              Contact Form.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row mt-10 items-center">
            <div className="lg:basis-1/3 bg-borderbg lg:h-[60vh] py-10 w-full text-center flex flex-col justify-center px-10">
              <img
                src="./assets/images/contact-us-img.png"
                alt="contact us.png"
                className="w-72 mx-auto"
              />
              <h1 className="text-center mt-3 text-3xl text-white">
                Make <span className="font-semibold">Appointment</span> & <br />
                Take Care Of Your <br />
                Healthy Life
              </h1>
            </div>
            <div className="basis-2/3">
              <div className="flex items-center justify-center bg-bgprimary lg:h-[60vh]">
                <form className="w-full max-w-lg p-6 bg-bgprimary rounded-lg">
                  <div className="grid grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-2 border border-gray-400 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-textsecondary"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 border border-gray-400 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-textsecondary"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full p-2 border border-gray-400 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-textsecondary"
                    />
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-400 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-textsecondary"
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full h-32 mt-4 p-2 border border-gray-400 bg-transparent rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-textsecondary"
                  ></textarea>
                  <button
                    type="submit"
                    className="mt-4 px-6 py-2 text-textsecondary border border-textsecondary rounded-full hover:bg-textsecondary hover:text-green-900 transition hover:cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
