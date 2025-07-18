import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import logo from "../assets/logo.png";

const RotatingLogo = () => {
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Use spring for smooth animation
  const rotateX = useSpring(rawRotateX, { stiffness: 50 });
  const rotateY = useSpring(rawRotateY, { stiffness: 50 });

  const handleMouseMove = (event) => {
    const { movementX, movementY } = event;
    rawRotateY.set(rawRotateY.get() + movementX * 0.5);
    rawRotateX.set(rawRotateX.get() - movementY * 0.5);
  };

  return (
    <div className="flex items-center justify-center h-full select-none">
      <motion.img
        src={logo}
        alt="Rotaract Logo"
        onPointerDown={(e) => e.target.setPointerCapture(e.pointerId)}
        onPointerMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
        }}
        className="w-[250px] cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};

export default RotatingLogo;
