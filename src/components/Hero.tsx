import React from "react";
import { FaRocket, FaMeta } from "react-icons/fa6";
import CTA from "./CTAButton"
const Hero: React.FC = () => {
  

  return (
    <section
      id="home"
      className="pt-24 pb-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two column layout: text + photo. Stacks on small screens (375px) */}
        <div className="grid grid-cols-1 gap-4 items-center ">
          {/* Left: Text and CTAs */}
          <div className="text-center md:text-left">
            <div className="mb-3 flex justify-center md:justify-start">
              <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
            </div>

            <h1 className="text-2xl font-semibold sm:text-4xl md:text-5xl  mb-6 leading-tight text-left  md:text-center p-4">
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

            <CTA/>
            
            <p className="text-sm text-center text-[#404141] font-bold mt-0.5 mb-1 md:mb-20">
              Let Me Ideate Your Next Ad Campaign On Meta
            </p>
          </div>

          {/*Photo / Profile card */}
          <div className=" flex justify-center mt-1 mb-4 md:mb-22">
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
                      <h3 className="text-left text-sm md:text-md font-bold mb-2 mr-2  ml-3 whitespace-nowrap mt-3">
                        Yuvraj Singh Rajawat
                      </h3>
                    </div>

                    <div className=" text-left">
                      <p className="text-xs mt-10 ml-3 md:text-lg  text-gray-300 mb-2">
                        I help CEOs & <br /> Founders turn Meta <br />
                        (Instagram & Facebook) <br /> into their most scalable{" "}
                        <br />
                        and profitable revenue
                        <br /> engine
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-sm bg-[#F4F2EE] rounded-2xl  p-4 mb-3">
                  <h3 className="font-bold">Consulted 30+</h3>
                  <p className="text-sm">
                    D2C Shark Tank brands, VC-backed startups, bootstrapped
                    founders
                  </p>
                </div>

                <div className="flex gap-2 mt-1">
  {/* Box 1 */}
  <div className="bg-[#F4F2EE] rounded-2xl p-1 w-30 aspect-square flex flex-col justify-center">
    <h3 className="text-sm text-shadow-initial">
      <p className="font-bold text-base">5 + Years </p>
      of Doing Creative Strategy & Performance Marketing
    </h3>
  </div>

  {/* Box 2 */}
  <div className="bg-[#F4F2EE] rounded-2xl p-1 w-30 aspect-square flex flex-col justify-center">
    <h3 className="text-sm">
      <p className="font-bold text-base">1000+</p>
      Meta Ads Ideated, Written & Directed
    </h3>
  </div>

  {/* Box 3 */}
  <div className="bg-[#F4F2EE] rounded-2xl p-1 w-30 aspect-square flex flex-col justify-between">
    <div>
      <h3 className="text-sm">
        <p className="font-bold text-base">INR 70 Cr+</p>
        Ad Spend Managed On Meta Ads
      </h3>
    </div>

    <div className="flex items-center gap-1 mt-1">
      <FaMeta size={26} className="text-blue-600" />
      <span className="text-xl">🚀</span>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
          <div className="text-lg md:text-xl">
          <CTA/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
