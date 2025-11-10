"use client";

import React from "react";
import Head from "next/head";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

type Blog = {
  id: number;
  title: string;
  dateISO: string;
  dateReadable: string;
  author: string;
  image: string;
  description: string;
  link: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Partner Visa (Subclass 820/801)",
    dateISO: "2025-05-14",
    dateReadable: "May 14, 2025",
    author: "Everest Education",
    image: "/images/blog/study.jpg",
    description: "The first partner visa category is the Subclass 820 Visa.",
    link: "/blog/partner-visa-820-801",
  },
  {
    id: 2,
    title: "Student Visa",
    dateISO: "2025-02-20",
    dateReadable: "Feb 20, 2025",
    author: "Grace International",
    image: "/images/blog/convo.jpg",
    description: "The Subclass 500 visa lets you study full-time in Australia.",
    link: "/blog/student-visa",
  },
  {
    id: 3,
    title: "Temporary Skill Shortage Visa",
    dateISO: "2024-12-02",
    dateReadable: "Dec 02, 2024",
    author: "Grace International",
    image: "/images/blog/hire.jpg",
    description:
      "Lets employers hire foreign workers to fill local skill shortages.",
    link: "/blog/temporary-skill-shortage-visa",
  },
];

// JSON-LD for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: blogs.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "BlogPosting",
      headline: b.title,
      url: `https://yourdomain.com${b.link}`,
      datePublished: b.dateISO,
      author: { "@type": "Organization", name: b.author },
      image: b.image,
      description: b.description,
    },
  })),
};

// Parent container with stagger
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.35, delayChildren: 0.25 },
  },
};

// Heading animation
const headingVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Card animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// Clamp description text
const clampStyle: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

const BlogSection: React.FC = () => {
  return (
    <>
      <Head>
        <title>Our Blogs | Grace International</title>
        <meta
          name="description"
          content="Latest news, visa updates, and study abroad information from Grace International."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section aria-label="Blog Section" className="py-14 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-[#00AEEF] font-medium text-lg tracking-wide uppercase">
            Our Blogs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3A6D] mt-2">
            Latest Articles & News
          </h2>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              className="bg-[#F9FAFB] rounded-xl shadow-md hover:shadow-xl transition-shadow 
                         flex-shrink-0 w-full sm:w-[24rem] lg:w-[28rem] flex flex-col h-full p-5"
              variants={cardVariants}
              role="article"
              aria-labelledby={`blog-title-${blog.id}`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Header */}
              <header className="mb-4 flex flex-col flex-1">
                <h3
                  id={`blog-title-${blog.id}`}
                  className="text-lg font-semibold text-[#00AEEF] mb-2 hover:underline cursor-pointer"
                >
                  {blog.title}
                </h3>

                <div className="flex text-base items-center justify-between whitespace-nowrap">
                  <p className="text-gray-600">
                    <span className="font-medium text-black">On</span>{" "}
                    <time dateTime={blog.dateISO}>{blog.dateReadable}</time>
                  </p>
                  <p>
                    <span className="ml-4 font-medium text-black">By</span>{" "}
                    {blog.author}
                  </p>
                </div>
              </header>

              {/* Image */}
              <div className="mt-4 overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={`${blog.title} - ${blog.author}`}
                  width={1200}
                  height={600}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 ease-out hover:scale-110"
                  unoptimized
                />
              </div>

              {/* Description */}
              <div className="mt-6 text-xl font-medium text-[#1D3A6D] flex-1">
                <p className="mb-3" style={clampStyle}>
                  {blog.description}
                </p>
              </div>

              {/* Button */}
              <a
                href={blog.link}
                className="relative inline-block w-1/2 bg-[#164386] text-white text-xl py-2.5 rounded-4xl font-medium text-center
                           transition-all duration-700 ease-out hover:bg-[#1272da] hover:scale-105"
                aria-label={`Read more about ${blog.title}`}
              >
                Explore more
              </a>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default BlogSection;
