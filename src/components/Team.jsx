import React from "react";
import Tilt from "react-parallax-tilt";
import { teamMembers } from "../constants";
import { meta, tesla, shopify } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const photoMap = { meta, tesla, shopify };

const categories = [
  { key: "executive", label: "Executive Board" },
  { key: "BOD", label: "Board of Directors" },
  { key: "past-president", label: "Past Presidents" },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-primary text-white py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Our Team</h2>
      {categories.map((cat) => {
        const members = teamMembers.filter((m) => m.category === cat.key);
        if (!members.length) return null;
        return (
          <div key={cat.key} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">{cat.label}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {members.map((member, idx) => (
                <Tilt
                  key={member.name + idx}
                  className="w-full"
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  scale={1.05}
                  transitionSpeed={450}
                  glareEnable={false}
                >
                  <motion.div
                    variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                  >
                    <div className="bg-black-100 rounded-[20px] py-5 px-6 flex flex-col items-center">
                      <img
                        src={photoMap[member.photo] || member.photo}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-secondary"
                      />
                      <div className="text-xl font-bold">{member.name}</div>
                      <div className="text-secondary text-sm mt-1">{member.position}</div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Team; 