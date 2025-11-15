import React from "react";
import { FaRocket, FaMeta } from "react-icons/fa6";
const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 pb-12 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two column layout: text + photo. Stacks on small screens (375px) */}
        <div className="grid grid-cols-1 gap-8 items-center">
          {/* Left: Text and CTAs */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
            </div>

            <h1 className="text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-center">
              Hire The Same Brain Behind
              <br />
              Ads That Generated{" "}
              <span className="gradient-text">
                ₹150Cr+
                <br />
                in Revenue
              </span>{" "}
              for India's Top
              <br /> D2C Brands To Crack <br />
              Meta Ads For You
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center ">
              <button onClick={scrollToWork} className="btn-primary">
                Work With Me
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <br />

            <p className="text-sm text-center text-gray-600 mb-6">
              Let Me Ideate Your Next Ad Campaign On Meta
            </p>
          </div>

          {/*Photo / Profile card */}
          <div className="order-2 md:order-2 flex justify-center">
            {/* Scale wrapper */}
            <div className="md:scale-[1.25]">
              <div className="w-full max-w-sm">
                <div className="flex grid-cols-2 bg-[#404348] rounded-2xl overflow-hidden shadow-2xl mb-4">
                  <div className="w-full h-64 md:h-90 bg-[#404348] rounded-2xl  overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dix4pzu0k/image/upload/c_crop,w_1492,h_1853,x_708,y_1101/v1763140626/IMG_6887_gm5yk2.jpg"
                      alt="Yuvraj Singh Rajawat"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className=" grid-rows-2 mt-1 ml-2 text-white">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 mr-2 whitespace-nowrap mt-3">
                        Yuvraj Singh Rajawat
                      </h3>
                    </div>

                    <div className=" justify-center">
                      <p className="text-sm mt-10 ml-3 md:text-lg  text-gray-300 mb-2">
                        I help CEOs & <br /> Founders turn Meta <br />
                        (Instagram & Facebook) <br /> into their most scalable{" "}
                        <br />
                        and profitable revenue
                        <br /> engine
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-sm bg-[#F4F2EE] rounded-2xl  p-4">
                  <h3 className="font-bold">Consulted 30+</h3>
                  <p>
                    D2C Shark Tank brands, VC-backed startups, bootstrapped
                    founders
                  </p>
                </div>

                <div className="flex grid-cols-3">
                  <div className="max-w-sm bg-[#F4F2EE] rounded-2xl  p-4">
                    <h3>
                      <p className="font-bold">5 + Years </p>
                      of Doing Creative Strategy & Performance Marketing
                    </h3>
                  </div>

                  <div className="max-w-sm bg-[#F4F2EE] rounded-2xl  p-4">
                    <h3>
                      <p className="font-bold">1000 </p>
                      Meta Ads Ideated, Written & Directed
                    </h3>
                  </div>

                  <div className="max-w-sm bg-[#F4F2EE] rounded-2xl  p-4">
                    <h3>
                      <p className="font-bold">INR 70 Cr+ </p>Ad Spend Managed
                      On Meta Ads{" "}
                    </h3>

                    <div className="flex items-center gap-1">
                      <div className="gap-0">
                        <FaMeta size={60} className="p-4 text-blue-600" />

                        <span className="text-blue-600 font-semibold text-xl mt-2 tracking-wide">
                          Meta
                        </span>
                      </div>

                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
