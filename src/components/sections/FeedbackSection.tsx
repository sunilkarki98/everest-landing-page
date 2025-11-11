"use client";

import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Poppins } from "next/font/google";

// ✅ Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const feedbacks = [
  {
    name: "Nisha Baniya",
    course: "MBA - CSU",
    feedback:
      "I'm glad I chose Everest Education for my studies; they fully assisted and guided me through the entire process. I believe Grace is the best place for any student planning to study abroad. Their support, the administration, and the welcoming office environment are all truly impressive. Everything was completed right on time, without any deferrals.",
    image: "/images/clients/client2.jpg", // replace with actual image path
  },
  {
    name: "Sanjeet Parajuli",
    course: "Bachelor of Business - Torrens University",
    feedback:
      "I feel fortunate to be related with the Everest Education and satisfied with their entire service. I am extremely grateful to the consultancy for their support in making my processing much more efficient than I expected. I vouch for the organization and encourage to visit Grace International if you are looking for best consultancy for abroad study.",
    image: "/images/clients/client1.jpg", // replace with actual image path
  },
];

const FeedbackSection = () => {
  return (
    <section
      className={`${poppins.className} relative bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16`}
    >
      <div className="relative lg:container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* Heading Section */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-cyan-400 text-center font-bold text-sm md:text-2xl tracking-wide">
            Our Feedbacks
          </p>
          <h2 className="text-3xl text-center md:text-5xl font-bold mt-1 leading-tight">
            Clients are
            <br></br> 
            Talking
          </h2>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto lg:mx-0">
          {feedbacks.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300"
            >
              <Quote className="text-blue-700 w-8 h-8 mb-3" />
              <p className="text-sm md:text-base font-normal leading-relaxed mb-6">
                {item.feedback}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.course}</p>
                </div>
                <div className="w-16 h-16 scale-150  rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
