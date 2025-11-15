import React from "react";
import VideoCarousel from './AnimatedCard';

const WorkWithMe: React.FC = () => {
  const videoData = [
  {
    image: "https://player.vimeo.com/video/1137209274?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    amount: "₹726,924.31",
    roas: "12.99",
  },
  {
    image: "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755359130/arabian_rogpzs.gif",
    amount: "₹512,430.00",
    roas: "7.84",
  },
  {
    image: "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755357609/asligems_cx9ntn.gif",
    amount: "₹1,12,000.00",
    roas: "18.20",
  },
  {
    image: "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755443775/Binni_d8smwh.gif",
    amount: "₹1,12,000.00",
    roas: "18.20",
  },
  {
    image: "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755443771/YHL_thsupk",
    amount: "₹1,12,000.00",
    roas: "18.20",
  },
  {
    image: "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755506027/fictales_rim5pq.gif",
    amount: "₹1,12,000.00",
    roas: "18.20",
  },
  {
    image: "https://res.cloudinary.com/dvxqb1wge/image/upload/v1755442431/photojewels_aojp4i.gif",
    amount: "₹1,12,000.00",
    roas: "18.20",
  },
];


  const services = [
    {
      title: "What Exactly Will You Get?",
      description:
        "A Ready-To-Use, Million Dollar Creative Strategy That Can Multiply Your Meta Ad Profits Within A Week!",
      details:
        "ALONG with Ad Ideas, proper scripts, frame by frame storyboards, and the exact logic behind every decision.",
      benefits: [
        {
          icon: "🎯",
          title: "Winning Ad Strategy",
          description:
            "The exact ad formats, angles, and hooks that will explode your ROAS.",
        },
        {
          icon: "📝",
          title: "50 Page, No-Filler Ad Scripts + Storyboards",
          description:
            "Frame-by-frame, creative ready ads to run and watch your revenue soar forever.",
        },
        {
          icon: "📚",
          title: "Internal Playbook",
          description:
            "I'll document the why behind every script, and give you the ad formats, angles, and hooks that work for your niche forever.",
        },
      ],
    },
  ];

  const faqs = [
    "What kind of ads should I create (still image vs. video vs. carousel)?",
    "What is the best communication angle for my product category?",
    "Should I use User Generated Content (UGC) to identify it for your brand?",
    "What are the best ideas on my brand ideas for maximum conversions?",
    "Which POV should I use?",
    "Should I use Educational or Sales Content?",
    "Why are cheaper, simpler creatives better?",
    "Why exactly is money leaking in my Meta Ads right now (honest diagnosis of what's actually failing and how to fix it dramatically).",
  ];

  const process = [
    {
      step: "1",
      title: "Understand Your Product & Dissipate Your Customer Funnel Market",
      description:
        "I first learn everything about the product, audience, current funnel and their pain points.",
    },
    {
      step: "2",
      title: "Understand Competition",
      description:
        "I analyze your brand and competitors using spy tools and ad libraries.",
    },
    {
      step: "3",
      title: "I Create Original Concepts",
      description:
        "New ad ideas powered by copywriting, psychology, behavioral science blended with your brand.",
    },
  ];

  const proofSection = {
    title:
      "I've Ideated, Written, & Directed Over 1500 Ads On Meta Generating Over 150 Cr In Revenue Profitably",
    subtitle:
      "You've probably seen my ads, you just didn't know I wrote and ideated them",
    stats: [
      { label: "Amount spent return on ad...", value: "₹726,924.31" },
      { label: "Purchase ROAS (return on ad...", value: "12.99" },
    ],
  };

  return (
    <section
  id="work"
  className="py-16 bg-white max-w-6xl mx-auto"
>

      {/* SERVICES SECTION */}
      <div className=" bg-[#F4F2EE] mr-2 ml-2  md:ml-20 md:mr-12 rounded-2xl justify-center shadow-lg p-4 ">
        {services.map((service, index) => (
          <div key={index} className="mb-16 ">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-lg md:text-xl font-semibold mb-4 max-w-3xl mx-auto">
                {service.description}
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {service.details}
              </p>
              
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 " >
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-colors "
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
<br />
      {/* FAQ SECTION */}
      <div className="bg-[#404348] text-white mr-2 ml-2  md:ml-20 md:mr-12 rounded-2xl justify-center shadow-lg p-4 mb-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          And You Will Have Answers To The Following Questions -
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{faq}</p>
            </div>
          ))}
        </div>
      </div>
    
      {/* PROOF SECTION */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {proofSection.title}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {proofSection.subtitle}
        </p>
        
      </div>

      <br />
              <VideoCarousel items={videoData} />

      

      {/* CREATIVE STRATEGY SECTION */}
      <div className="mb-16 bg-[#F4F2EE] mr-2 ml-2 md:mr-12 md:ml-12 rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold mb-8 md:mb-10 text-gray-900 leading-tight">
          What Exactly Is A <span className=" text-[#8400FF] drop-shadow-lg">Creative Strategy</span>?
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-800 font-medium leading-relaxed">
            The only thing the customer actually sees is your <span className="font-bold text-gray-900">creative</span>.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-800 font-medium leading-relaxed">
            And one great video ad can <span className="font-bold text-white bg-gray-900 px-2 py-1 rounded">change your revenues overnight</span>
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
            <p className="text-xl md:text-2xl font-bold mb-6 text-gray-900 text-center">
              Like this one 👇
            </p>

            <div className="relative flex justify-center items-center">
              <img
                className="rounded-2xl shadow-2xl max-w-full h-auto border-2 border-white"
                src="https://res.cloudinary.com/dvxqb1wge/image/upload/v1755443775/Binni_d8smwh.gif"
                alt="Successful ad example"
              />

              <img
                src="https://res.cloudinary.com/dix4pzu0k/image/upload/v1763152415/Vector_669_e3xtja.png"
                alt="arrow"
                className="absolute -right-8 md:-right--1 -top-4 md:-top-30 w-12 md:w-16 rotate-[10deg] drop-shadow-lg"
              />
              
            </div>
          </div>

          <div className="bg-[#404348] text-white rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed space-y-4">
              <span className="block mb-4 text-xl md:text-2xl font-bold text-[#8400FF] ">
                Look at this video ad.
              </span>
              
              <span className="block mb-3">
                💰 It generated <span className="font-bold text-[#8400FF]  text-xl md:text-2xl">₹17,52,000</span> in sales in just <span className="font-bold">two weeks</span> at a ROAS of <span className="font-bold text-green-400 text-xl md:text-2xl">24</span>
              </span>
              
              <span className="block mb-3">
                🎯 It starts with the <span className="font-semibold text-[#8400FF] ">guilt trigger</span> - a kid zoned out on a phone.
              </span>
              
              <span className="block mb-4">
                ✅ And ends with a <span className="font-semibold text-[#8400FF] ">relatable mom</span> telling you exactly what to do next.
              </span>
              
              <span className="block mt-6 p-4 bg-[#9010ad] text-white rounded-xl font-bold text-md md:text-2xl text-center">
                This is AGC (Actor-Generated Content)
              </span>
              
              <span className="block mt-4 text-center text-gray-300 italic">
                Scripted like an ad but shot like UGC for high conversion.
              </span>
            </p>
          </div>

          <div className="text-center space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="font-black text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
              This is <span className="bg-gradient-to-r from-[#f2a710] to-[#f8c654] bg-clip-text text-transparent">Creative Strategy</span>
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-[#f2a710] to-[#f8c654] mx-auto rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Creative strategy defines <span className="font-bold text-gray-900">what ads to make</span>, <span className="font-bold text-gray-900">what to say</span>, and <span className="font-bold text-gray-900">how to show it</span> so people actually stop, listen, and buy.
            </p>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Process Behind Building Million Dollar Creative Strategies
          Consistently
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 mx-2"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">
          Starting Today, You'll Never Have To Worry About Meta Ads Ever Again!
        </h2>

        <button className="btn-primary mx-auto text-lg flex items-center gap-2">
          Work With Me
          <svg
            className="w-6 h-6"
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
    </section>
  );
};

export default WorkWithMe;
