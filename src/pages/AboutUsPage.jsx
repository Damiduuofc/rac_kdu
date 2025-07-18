import React, { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { FaAward, FaUsers, FaLightbulb, FaHistory } from "react-icons/fa";
import PSX_20230629_161041 from "../assets/PSX_20230629_161041.jpg";
import img123 from "../assets/123.jpeg";
import img111 from "../assets/111.jpeg";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.8, type: "spring" },
  }),
};

const AboutUsPage = () => {
  const [parallax, setParallax] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!aboutRef.current) return;
      const { left, width } = aboutRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      setParallax((x - 0.5) * 20); // -10 to 10 deg
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={aboutRef} className="relative min-h-screen bg-primary text-white py-16 px-4 max-w-4xl mx-auto overflow-hidden">
      {/* Animated top gradient bar for attention */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-3 rounded-b-2xl bg-gradient-to-r from-[#30a0e6] via-[#804dee] to-[#30a0e6] z-10 animate-pulse"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.h1
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#30a0e6] via-[#804dee] to-[#30a0e6] bg-clip-text text-transparent drop-shadow-lg relative z-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        About Us
      </motion.h1>

      {/* Card: About Section */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card mb-8">
          <div className="bg-black-100 rounded-[20px] py-5 px-6 flex flex-col md:flex-row items-center gap-8">
            <img src={PSX_20230629_161041} alt="About" className="w-full md:w-1/2 rounded-xl object-cover mb-4 md:mb-0" />
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-2">
                <motion.span
                  style={{ display: 'inline-block' }}
                  animate={{ rotate: parallax }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <FaUsers className="text-[#30a0e6] text-2xl" />
                </motion.span>
                <h2 className="text-2xl font-semibold text-white">What is Rotaract?</h2>
              </div>
              <motion.p className="text-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
Rotaract is a global youth organization focused on service, leadership, and professional development. The Rotaract Club of KDU Southern Campus (KDUSC) was established on July 16, 2018, with the support of the Rotary Club of Cinnamon Gardens. The club empowers undergraduates from diverse academic backgrounds to serve the community through impactful projects and initiatives.

After a brief period of inactivity, the club was rechartered in September 2020 with the guidance of Brigadier EADP Edirisinghe and now boasts over 150 active members. We aim to help students explore their talents, grow their leadership skills, and make meaningful contributions to society beyond academics.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Card: Vision Section */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card mb-8">
          <div className="bg-black-100 rounded-[20px] py-5 px-6 flex flex-col md:flex-row-reverse items-center gap-8">
            <img src={img123} alt="Vision" className="w-full md:w-1/2 rounded-xl object-cover mb-4 md:mb-0" />
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-2">
                <motion.span
                  style={{ display: 'inline-block' }}
                  animate={{ rotate: -parallax }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <FaLightbulb className="text-yellow-400 text-2xl" />
                </motion.span>
                <h2 className="text-2xl font-semibold text-white">Vision</h2>
              </div>
              <motion.p className="text-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                To be a leading Rotaract club in Sri Lanka, recognized for our dedication to service, leadership development, and the transformational impact we create in our local communities. We envision a future where empowered young individuals actively contribute towards the betterment of society, bridging borders between the campus and the community and making a lasting difference in the lives of those in need.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Card: Mission Section */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card mb-8">
          <div className="bg-black-100 rounded-[20px] py-5 px-6 flex flex-col md:flex-row items-center gap-8">
            <img src={img111} alt="Mission" className="w-full md:w-1/2 rounded-xl object-cover mb-4 md:mb-0" />
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-2">
                <motion.span
                  style={{ display: 'inline-block' }}
                  animate={{ rotate: parallax * 1.5 }}
                  transition={{ type: "spring", stiffness: 40 }}
                >
                  <FaAward className="text-pink-400 text-2xl" />
                </motion.span>
                <h2 className="text-2xl font-semibold text-white">Mission</h2>
              </div>
              <motion.p className="text-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To engage in meaningful community service initiatives as well as empower young individuals studying at the KDU Southern Campus through Rotaract principles, fostering personal and professional growth.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* You can add more cards/sections below as needed, following the same pattern */}
    </div>
  );
};

export default AboutUsPage; 