import { useState, useEffect } from "react";
import { styles } from "../styles";
import { herophoto, hero2, hero3 } from "../assets";

const heroImages = [herophoto, hero2, hero3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance logic (3 seconds)
  useEffect(() => {
    const next = () => setCurrent((prev) => (prev + 1) % heroImages.length);
    const timeout = setTimeout(next, 3000);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <>
      {/* Inline Styles */}
      <style jsx>{`
        @keyframes slow-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes scroll-indicator {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(8px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3.5s ease-in-out infinite 0.5s;
        }

        .fade-slide {
          transition: opacity 1s, transform 1s;
          opacity: 0;
          position: absolute;
          inset: 0;
        }
        .fade-slide.active {
          opacity: 1;
          z-index: 1;
          transform: scale(1.05);
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Images */}
        <div className="absolute inset-0 w-full h-full z-0">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Hero Slide ${idx + 1}`}
              className={`fade-slide${current === idx ? " active" : ""} w-full h-full object-cover select-none pointer-events-none`}
            />
          ))}
        </div>
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />
        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-6 max-w-6xl mx-auto">
          {/* Main Content Card */}
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-12 shadow-2xl animate-fade-in-up">
            {/* Main Heading */}
            <h1 className={`${styles.heroHeadText} text-white mb-6 leading-tight`}>
              <span className="block mb-2 text-white/90 font-light">Hi, We are</span>
              <span className="block text-transparent bg-gradient-to-r from-[#30a0e6] via-[#4fb3f4] to-[#30a0e6] bg-clip-text font-bold animate-gradient-x">
                Rotaract Club of KDU Southern
              </span>
            </h1>
            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#30a0e6] to-transparent mx-auto mb-6 rounded-full animate-pulse-slow" />
            {/* Subtitle - Centered */}
            <p className={`${styles.heroSubText} text-white/90 font-medium tracking-wide text-center max-w-2xl mx-auto`}>
              Letters of Change – Committed to Care
            </p>
          </div>
          {/* Scroll Indicator */}
          
        </div>
      </section>
    </>
  );
};

export default Hero;