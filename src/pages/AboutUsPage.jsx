import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaLightbulb, FaHistory } from "react-icons/fa";

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

      {/* Section 1: What is Rotaract? */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <div className="inline-flex items-center gap-3 mb-2">
          <motion.span
            style={{ display: 'inline-block' }}
            animate={{ rotate: parallax }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <FaUsers className="text-[#30a0e6] text-2xl" />
          </motion.span>
          <h2 className="text-2xl font-semibold">What is Rotaract?</h2>
        </div>
        <motion.p className="text-secondary bg-black/60 backdrop-blur-md rounded-2xl p-5 border-l-4 border-[#30a0e6] shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rotaract is a global organization that brings together young adults to take action in their communities, develop leadership and professional skills, and have fun through service. [Edit this text for your club]
        </motion.p>
      </motion.section>

      {/* Section 2: About KDUSC Chapter */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        <div className="inline-flex items-center gap-3 mb-2">
          <motion.span
            style={{ display: 'inline-block' }}
            animate={{ rotate: -parallax }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <FaHistory className="text-[#804dee] text-2xl" />
          </motion.span>
          <h2 className="text-2xl font-semibold">About KDUSC Chapter</h2>
        </div>
        <motion.p className="text-secondary bg-black/60 backdrop-blur-md rounded-2xl p-5 border-l-4 border-[#804dee] shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Rotary and ‘Action’ are two words that are combined to form the word Rotaract. Rotaract is a service, leadership, professional, and community service organization for young men and women between the ages of 18 and above. Rotaract first started as a youth program in the United States on March 13, 1968. At the club level, the majority of Rotaract activities take place. There are 82 clubs in Sri Lanka, while there are roughly 7500 clubs overall throughout 156 nations. The Rotary club of Cinnamon Gardens sponsored the establishment of the Rotaract Club at General Sir John Kotelawala Defence University, Southern Campus (KDUSC) on July 16, 2018. The club's goal is to provide social services to the community through the combined efforts of undergraduate students at KDUSC pursuing various degree programs in architecture, information systems, information technology, quantity surveying, survey sciences, information, and other fields. Due to the university’s distance from a major city and the difficulty in raising finances during those times for events, the club was inactive for the previous two years. Brigadier EADP Edirisinghe, a former rector of the Southern Campus, assisted in the club’s rechartering in September 2020 with a membership base of more than 150 people.
        </motion.p>
      </motion.section>

      {/* Section 3 & 4: Combined Value and Social Benefits */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        <motion.p className="text-secondary bg-black/60 backdrop-blur-md rounded-2xl p-5 border-l-4 border-[#30a0e6] shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          In present days, there is a huge competition in education in Sri Lanka. People measure the social status of someone by their educational level and how he/she passed the exams. So, in modern days, children as well as parents, teachers and elders, all tell their children to pass the exams with flying colours. Therefore, children have only one goal: to go through tuition classes and focus only on exams. So, they miss out in exploring their other talents and skills some are yet to even find what their true talents are. Some people can’t speak in front of a small class. As a university student, it is very important to be a member of these clubs because this is a last chance to settle our past mistakes. We can identify our hidden talents, skills like music and dancing skills. And also, we can showcase them. Why? This club organizes various aesthetic events and official meetings. On the other hand, when we get into a university, one of the biggest problems that there is, is the senior-junior gap. When we join a club like this, we all should work as one person to organize events like the above mentioned, so we can work together in harmony. When we are joining a Rotaract club, we can make new friends in our community as well as throughout Sri Lanka and the world. And not to mention, Rotary is fun. They arrange parties and other entertaining meetings among them. So, we can grow our personal skills and we can present our personal skills too. It develops leadership, public speaking, social, business, personal and vocational skills as well as improving cultural awareness.
        </motion.p>
      </motion.section>

      {/* Section 5: Mission & Vision */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
      >
        <div className="inline-flex items-center gap-3 mb-2">
          <motion.span
            style={{ display: 'inline-block' }}
            animate={{ rotate: parallax * 1.5 }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <FaLightbulb className="text-yellow-400 text-2xl" />
          </motion.span>
          <h2 className="text-2xl font-semibold">Mission & Vision</h2>
        </div>
        <motion.ul
          className="list-disc ml-6 text-secondary bg-black/60 backdrop-blur-md rounded-2xl p-5 border-l-4 border-yellow-400 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <li><b>Mission:</b> To engage in meaningful community service initiatives as well as empower young individuals studying at the KDU Southern Campus through Rotaract principles, fostering personal and professional growth.</li>
          <li><b>Vision:</b> To be a leading Rotaract club in Sri Lanka, recognized for our dedication to service, leadership development, and the transformational impact we create in our local communities. We envision a future where empowered young individuals actively contribute towards the betterment of society, bridging borders between the campus and the community and making a lasting difference in the lives of those in need.</li>
        </motion.ul>
      </motion.section>

      {/* Section 6: Past Achievements */}
      <motion.section
        className="mb-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={5}
      >
        <div className="inline-flex items-center gap-3 mb-2">
          <motion.span
            style={{ display: 'inline-block' }}
            animate={{ rotate: -parallax * 1.5 }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <FaAward className="text-pink-400 text-2xl" />
          </motion.span>
          <h2 className="text-2xl font-semibold">Past Achievements</h2>
        </div>
        <motion.ul
          className="list-disc ml-6 text-secondary bg-black/60 backdrop-blur-md rounded-2xl p-5 border-l-4 border-pink-400 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <li>[Achievement 1]</li>
          <li>[Achievement 2]</li>
          <li>[Achievement 3]</li>
        </motion.ul>
      </motion.section>
    </div>
  );
};

export default AboutUsPage; 