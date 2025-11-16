import React from 'react';
import { FaRocket, FaMeta } from "react-icons/fa6";
import CTA from "./CTAButton"
const About: React.FC = () => {
  return (
    <section id="about" className=" bg-gradient-to-b from-white to-purple-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center md:mb-12">
            <h2 className="text-5xl font-bold ">About</h2>
          </div>
          <br />

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
                           <div className="max-w-sm bg-[#F4F2EE] rounded-2xl  p-4 mb-3">
                             <h3 className="font-bold">Consulted 30+</h3>
                             <p className="text-sm">
                               D2C Shark Tank brands, VC-backed startups, bootstrapped
                               founders
                             </p>
                           </div>
           
                           <div className="flex gap-2 mt-1">
  {/* Box 1 */}
  <div className="bg-[#F4F2EE] rounded-2xl p-2 w-28 aspect-square flex flex-col justify-center">
    <h3 className="text-sm text-shadow-initial">
      <p className="font-bold text-base">5 + Years </p>
      of Doing Creative Strategy & Performance Marketing
    </h3>
  </div>

  {/* Box 2 */}
  <div className="bg-[#F4F2EE] rounded-2xl p-2 w-28 aspect-square flex flex-col justify-center">
    <h3 className="text-sm">
      <p className="font-bold text-base">1000+</p>
      Meta Ads Ideated, Written & Directed
    </h3>
  </div>

  {/* Box 3 */}
  <div className="bg-[#F4F2EE] rounded-2xl p-2 w-28 aspect-square flex flex-col justify-between">
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
<CTA />
          {/* Professional Summary */}
          <div className="bg-white rounded-2xl shadow-lg mt-2 p-8 md:p-12">
  <h3 className="text-3xl font-bold mb-6">Professional Summary</h3>

  <div className="space-y-4 text-gray-700 leading-relaxed">
    <p className="text-lg">
      If I had to sum up my professional journey, it wouldn’t start in marketing with some grand vision or fancy plan. 
      I just knew one thing — <span className="font-semibold">I could think.</span> 
      And that one skill pushed me across every corner of the digital world: copywriting, growth, funnels, performance, scripts — you name it. 
      I kept figuring things out on the go… and plot twist: it worked.
    </p>

    <p className="text-lg">
      I went from writing telesales scripts at Adda247, to acquiring 30,000 paying customers a month at Insane Marketers, 
      to creating content at agencies where the only real job description was <span className="italic">“make it work.”</span>
    </p>

    <p className="text-lg font-semibold">
      And then 2024 happened.
    </p>

    <p className="text-lg">
      A friend casually asked me to make content for their ads.  
      One project turned into ten.  
      Ten turned into an agency.  
      And before I knew it — <span className="font-semibold">Yuvichaar Funnels</span> was born.
    </p>

    <p className="text-lg">
      Today, that “accident” has become a full-fledged creative powerhouse with 
      <span className="font-semibold"> 30+ insanely talented people</span> 
      who create content as if their life depends on every hook, angle, and edit.  
      We scale D2C and ecommerce brands with ads that genuinely print money, working with funded companies on 
      <span className="font-semibold"> 7-figure monthly retainers.</span>
    </p>

    <p className="text-lg">
      My journey has been a loop of:  
      <span className="font-semibold">learning → simplifying → fixing → creating → scaling → repeating.</span>
    </p>

    <p className="text-lg">
      I've built my entire career on one ability:  
      <span className="font-semibold">to turn creative chaos into predictable growth.</span>
    </p>

    <p className="text-lg">
      And now?  
      I’m the guy brands call when they need creatives that convert, ROAS that behaves, 
      and a content engine strong enough to scale without crashing.
    </p>

    <p className="text-lg font-semibold">
      If you’re building something ambitious and want creative that doesn’t just look good but actually performs — we should talk.
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
