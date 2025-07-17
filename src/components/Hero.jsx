import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { herophoto, hero2 } from "../assets";

const heroImages = [herophoto, hero2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance logic (2 seconds)
  useEffect(() => {
    const next = () => setCurrent((prev) => (prev + 1) % heroImages.length);
    const timeout = setTimeout(next, 2000);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Images */}
      {heroImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Hero Slide ${idx + 4}`}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Overlay for dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
      {/* Centered Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4">
        <h1 className={`${styles.heroHeadText} text-white drop-shadow-lg`}>
          Hi, We are <span className='text-[#30a0e6]'>Rotaract Club of KDU Southern</span>
        </h1>
        <p className={`${styles.heroSubText} mt-4 text-white-100 drop-shadow-md max-w-2xl`}>
        Letters of Change – Committed to Care
        </p>
      </div>
    </section>
  );
};

export default Hero;
