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
      className="relative group bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-96"
      variants={fadeUpCard}
    >
      {/* Image */}
      <div className="relative w-full h-85 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:blur-sm"
        />

        {/* Social Icons on Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">
          <a
            href="#"
            aria-label={`${name} LinkedIn`}
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label={`${name} Twitter`}
            className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label={`${name} Facebook`}
            className="p-3 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Text Info */}
      <div className="relative z-10 p-5 transition-all duration-500 group-hover:text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm mt-1">{phone}</p>
        <p className="text-sm font-medium mt-1">{role}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>

      {/* Blue Shade Sliding Up */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-blue-500 to-blue-300 transition-all duration-500 group-hover:h-46"></div>
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
          className="mb-4 lg:mb-4" // override the default mb-10 to leave space for the button
        />
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">
          View All Team Members
        </button>
      </div>

      {/* Employee Cards */}
      <motion.div
        className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8"
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
