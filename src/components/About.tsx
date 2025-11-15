import React from 'react';
import { FaRocket, FaMeta } from "react-icons/fa6";

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center md:mb-12">
            <h2 className="text-5xl font-bold ">About</h2>
          </div>
          <br />

           <div className="order-2 md:order-2 flex justify-center md:mt-10 mb-32">
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

          {/* Professional Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                If I had to sum up my professional journey, it wouldn't start with marketing; it would start with storytelling – because I was that weird 18-year-old who built a media agency just because they liked to tell stories.
              </p>
              <p className="text-lg">
                I just knew one thing – I could think. And that was all pushed me across some of the failed world.
              </p>
              <p className="text-lg">
                <span className="font-semibold">Then turned into a "hack."</span>
              </p>
              <p className="text-lg">
                I wrote from one of Agencies where the only real job was scrolling in feeds – browsing Meta, Instagram, Tiktok, and X. Yes, 2024 happened.
              </p>
              <p className="text-lg">
                <span className="font-semibold">And just, I found exactly what to make content for their Income Marketers.</span>
              </p>
              <p className="text-lg">
                In months context of agencies where the only 30+ Agencies talented people who create powerhouses with 30+ Agencies talented people who treats creative as I filter for depends on every scroll.
              </p>
              <p className="text-lg">
                <span className="font-semibold">We scale D2C and e-commerce brands with ads that principles scale manage, working with funded companies who know how to scale without burning money.</span>
              </p>
              <p className="text-lg">
                And then, there's my "other" company – creative storytelling = Being – creative = scaling creative them into predictable growth.
              </p>
              <p className="text-lg font-semibold">
                And yeah.
              </p>
              <p className="text-lg">
                In turn creative ideas into predictable growth.
              </p>
              <p className="text-lg">
                And profit.
              </p>
              <p className="text-lg">
                Because for me, it never felt like work. I like to think up my creative that connect. ROAS that believes, a content engine strong enough to scale without grinding.
              </p>
              <p className="text-lg">
                Some people make ads.
              </p>
              <p className="text-lg font-semibold">
                I turn creative ideas into predictable growth.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-6">
              Starting Today, You'll Never Have To Worry About Meta Ads Ever Again!
            </h3>
            <button 
              onClick={() => {
                const element = document.getElementById('work');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary mx-auto"
            >
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
        </div>
      </div>
    </section>
  );
};

export default About;
