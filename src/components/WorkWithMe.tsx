import React from "react";
import { useRef,useState } from "react";
import VideoCarousel from "./AnimatedCard";
import CTA from "./CTAButton";
const WorkWithMe: React.FC = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setMuted(false);
    }
  };
  const handlemute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setMuted(true);
    }
  };

  const videoData = [
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763375963/Ad_1_2_mmjczo.mp4",
    amount: "₹893,540.22",
    roas: "14.32",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763377425/Ad_3_1_tmrsmd.mp4",
    amount: "₹389,274.50",
    roas: "6.41",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763377596/YHL_Collagen-1_2_lely9z.mp4",
    amount: "₹1,58,320.00",
    roas: "21.47",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763377771/Ad_1_short_version_hqdfd8.mp4",
    amount: "₹2,04,910.75",
    roas: "9.82",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763377812/fictales_script_2_1_siocbj.mp4",
    amount: "₹74,560.00",
    roas: "11.33",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763392028/BINNI_script_3_final_1_1_cfq0gf.mp4",
    amount: "₹3,12,480.60",
    roas: "7.92",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763391287/PHL_jptyxu.mp4",
    amount: "₹2,14,780.40",
    roas: "8.92",
  },
  {
    image: "",
    video: "https://res.cloudinary.com/do7stdrs3/video/upload/v1763391889/pj_script_7_final_1_bdpu8y.mp4",
    amount: "₹3,28,970.40",
    roas: "9.87",
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
          title: "30 Ready-to-Use Ad Scripts + Storyboards",
          description:
            "Frame-by-frame, high-performing creative blueprints.",
        },
        {
          icon: "📚",
          title: "Internal Playbook",
          description:
            "I'll document the why behind every decision so your team can keep creating winners forever.",
        },
      ],
    },
  ];

  const faqs = [
    " What Kind Of Ads Should I create right now to get the fastest revenue jump this week, this month?  (I'll identify your lowest hanging fruits)",
    "What is the single strongest communication angle for my product category? - This one angle can multiply your ROAS instantly.I'll identify it for your brand.",
    "Which ad formats should my brand focus on for maximum conversions?UGC, VSL, founder POV, testimonial, skit, before-after, reels-style edits — I'll tell you the exact mix your brand should produce to scale fast.",
    "Why are cheaper, simpler competitor ads beating my expensive shoots? I'll show you the storytelling gap that's killing your performance and how to reverse it with smarter angles and simpler execution.",
    " Where exactly is money leaking in my funnel — creatives, offer, landing page, or audience? A brutally honest diagnosis of what's actually broken and how to fix it immediately.",
    
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
    <>
    <section id="work" className=" bg-white max-w-6xl mx-auto mt-8 md:mt-1">
      {/* SERVICES SECTION */}
      <div className=" bg-[#F4F2EE] mr-2 ml-2  md:ml-20 md:mr-12 rounded-2xl justify-center shadow-lg p-4 ">
        {services.map((service, index) => (
          <div key={index} className="mb-16 ">
            <div className="text-left md:text-center mb-12">
              <h2 className="text-2xl md:text-5xl font-bold mb-4">
                {service.title}
              </h2>
              <p className="text-sm md:text-2xl font-semibold mb-4 max-w-3xl mx-auto">
                {service.description}
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                {service.details}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 ">
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
      <div className="mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-left md:text-center mb-1 p-4">
          {proofSection.title}
        </h2>
        <p className="text-left p-4 md:text-center text-gray-600 mb-2">
          {proofSection.subtitle}
        </p>
      </div>

      <VideoCarousel items={videoData} />

      <CTA />

      {/* CREATIVE STRATEGY SECTION */}
      <div className="mb-16 bg-[#F4F2EE] mt-4 mr-2 ml-2 md:mr-12 md:ml-12 rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-extrabold mb-8 md:mb-10 text-gray-900 leading-tight">
          What Exactly Is A{" "}
          <span className=" text-[#8400FF] drop-shadow-lg">
            Creative Strategy
          </span>
          ?
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-gray-800 font-medium leading-relaxed">
            The only thing the customer actually sees is your{" "}
            <span className="font-bold text-gray-900">creative</span>.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-800 font-medium leading-relaxed">
            And one great video ad can{" "}
            <span className="font-bold text-white bg-gray-900 px-2 py-1 rounded">
              change your revenues overnight
            </span>
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
            <p className="text-xl md:text-2xl font-bold mb-6 text-gray-900 text-center">
              Like this one 👇
            </p>

            <div className="relative flex justify-center items-center">
    <video
        ref={videoRef}
        className="rounded-2xl shadow-2xl max-w-full h-auto border-2 border-white"
        src="https://res.cloudinary.com/do7stdrs3/video/upload/v1763291141/science_kit_script_1_szjprt.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
      />

      {muted && (
        <button
          onClick={handleUnmute}
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-white px-4 py-2 rounded-xl"
        >
          Tap to Unmute 🔊
        </button>
      )}
      {!muted && (
         <button
            onClick={handlemute}
            className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-black/80 transition-colors"
          >
            🔇 Mute
          </button>
      )}

              <img
                src="https://res.cloudinary.com/dix4pzu0k/image/upload/v1763152415/Vector_669_e3xtja.png"
                alt="arrow"
                className="absolute -right-8 md:-right--1 -top-4 md:-top-30 w-12 md:w-16 rotate-[10deg] drop-shadow-lg"
              />
            </div>
            <p className="text-lg md:text-xl leading-relaxed space-y-4">
              <span className="block mb-4 mt-1 text-xl md:text-2xl font-bold text-[#8400FF] ">
                Look at this video ad.
              </span>

              <span className="block mb-3">
                💰 It generated{" "}
                <span className="font-bold text-[#8400FF]  text-xl md:text-2xl">
                  ₹17,52,000
                </span>{" "}
                in sales in just <span className="font-bold">two weeks</span> at
                a ROAS of{" "}
                <span className="font-bold text-green-400 text-xl md:text-2xl">
                  24
                </span>
              </span>

              <span className="block mb-3">
                🎯 It starts with the{" "}
                <span className="font-semibold text-[#8400FF] ">
                  guilt trigger
                </span>{" "}
                - a kid zoned out on a phone.
              </span>

              <span className="block mb-4">
                ✅ And ends with a{" "}
                <span className="font-semibold text-[#8400FF] ">
                  relatable mom
                </span>{" "}
                telling you exactly what to do next.
              </span>

              <span className="block font-bold text-2xl mb-4">
                And the format isn't typical UGC it's AGC (Actor-Generated
                Content):
              </span>

              <span className="block mb-4">
                Scripted like an ad, shot like UGC, performed by a relatable
                mom, but strategically crafted to hit psychology, pacing, hooks,
                and objections with precision.
              </span>
              <span className="block mb-4">
                It feels real, but it converts like a high-performance
                direct-response ad.
              </span>
            </p>
          </div>

          <div className="text-left md:text-center space-y-6 bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
            <p className="font-black text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
              This is{" "}
              <span className="bg-gradient-to-r from-[#f2a710] to-[#f8c654] bg-clip-text text-transparent">
                Creative Strategy
              </span>
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-[#f2a710] to-[#f8c654] mx-auto rounded-full"></div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
              Creative strategy defines{" "}
              <span className="font-bold text-gray-900">what ads to make</span>,{" "}
              <span className="font-bold text-gray-900">what to say</span>, and{" "}
              <span className="font-bold text-gray-900">how to show it</span> so
              people actually stop, listen, and buy.
            </p>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}

      <div className="bg-[#404348] text-white mr-2 ml-2  md:ml-20 md:mr-12 rounded-2xl justify-center shadow-lg p-4 mb-10">
        <h2 className="text-2xl font-bold text-center mb-8">
          My Process Behind Building Million Dollar Creative Strategies
          Consistently
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 ">
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
                  <h3 className="font-bold text-gray-600 text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default WorkWithMe;
