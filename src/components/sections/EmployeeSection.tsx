"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

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
      className="relative group bg-white rounded-xl shadow-lg overflow-hidden w-96" // fixed larger width
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35, // slower stagger
    },
  },
};

const EmployeeSection: React.FC = () => {
  const team: Employee[] = [
    {
      name: "Laura Awasthi",
      phone: "+977 9801234567",
      role: "Senior Consultant",
      description:
        "John has 10+ years of experience in education consultancy and student migration services.",
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
        <p className="text-blue-400 font-semibold text-xl">Our Team</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
          Our Everest Education Dedicated Team Member
        </h2>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition">
          View All Team Members
        </button>
      </div>

      {/* Employee Cards using flex-wrap for proper centering */}
      <motion.div
        className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((member, index) => (
          <EmployeeCard key={index} {...member} />
        ))}
      </motion.div>
    </section>
  );
};

export default EmployeeSection;
