"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUpContainer, fadeUpCard } from "../../lib/animations";

type EmployeeCardProps = {
  name: string;
  phone: string;
  role: string;
  description: string;
  image: string;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  phone,
  role,
  description,
  image,
}) => {
  return (
    <motion.div
      className="relative group bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-sm mx-auto sm:max-w-none sm:mx-0 flex flex-col h-full transform transition duration-500 hover:-translate-y-2 border border-gray-100"
      variants={fadeUpCard}
    >
      {/* Image with tighter structural height to reduce overall card size */}
      <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105 group-hover:blur-[2px]"
        />

        {/* Social Icons on Hover */}
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 z-20">
          <a
            href="#"
            aria-label={`${name} LinkedIn`}
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition transform hover:scale-110 shadow-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label={`${name} Twitter`}
            className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition transform hover:scale-110 shadow-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label={`${name} Facebook`}
            className="p-3 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition transform hover:scale-110 shadow-lg"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Text Info sliding box */}
      <div className="relative flex-grow flex flex-col overflow-hidden">
        {/* Blue Shade Background animates by transforming its Y axis perfectly to fill the container */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
        
        {/* Content Box */}
        <div className="relative z-10 p-6 flex flex-col flex-grow transition-colors duration-500 group-hover:text-white">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors">{name}</h3>
          <p className="text-sm font-semibold text-blue-600 mt-1 uppercase tracking-wider group-hover:text-blue-100 transition-colors">{role}</p>
          <p className="text-sm mt-3 font-medium opacity-90">{phone}</p>
          <p className="text-sm mt-2 opacity-80 leading-relaxed font-light">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

type Employee = {
  name: string;
  phone: string;
  role: string;
  description: string;
  image: string;
};



const EmployeeSection: React.FC = () => {
  const team: Employee[] = [
    {
      name: "Laura Awasthi",
      phone: "+977 9801234567",
      role: "Senior Consultant",
      description:
        "Laura has 10+ years of experience in education consultancy and student migration services.",
      image: "/images/employees/sika.jpg",
    },
    {
      name: "Jane Smith",
      phone: "+977 9807654321",
      role: "Visa Expert",
      description:
        "Jane specializes in student visas and has helped thousands of students achieve their dreams of studying abroad.",
      image: "/images/employees/chika.jpg",
    },
    {
      name: "Emmy Johnson",
      phone: "+977 9812345678",
      role: "Migration Agent",
      description:
        "Emmy is an expert in migration laws and ensures smooth processes for students and families. She is also expert in IELTS training.",
      image: "/images/employees/gwife.jpg",
    },
    {
      name: "Sophia Williams",
      phone: "+977 9823456789",
      role: "Career Advisor",
      description:
        "Sophia guides students to make the best choices for their career goals and education abroad.",
      image: "/images/employees/golendra.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <SectionHeading 
          eyebrow="Our Team" 
          title="Our Everest Education Dedicated Team Members" 
          eyebrowColor="text-blue-400" 
          titleColor="text-gray-800"
          className="mb-2 lg:mb-4"
        />
        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">
          View All Team Members
        </button>
      </div>

      {/* Employee Cards */}
      <motion.div
        className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((member) => (
          <EmployeeCard key={member.name} {...member} />
        ))}
      </motion.div>
    </section>
  );
};

export default EmployeeSection;
