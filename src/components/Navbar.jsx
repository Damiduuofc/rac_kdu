import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { motion } from "framer-motion";

// Animated MobileNav component
const links = [
  { href: "/", name: "Home" },
  { href: "/aboutus", name: "About us" },
  { href: "/menu", name: "Menu" },
  { href: "/contactus", name: "Contact us" }
];

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.60, 0, 0.20, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8, ease: [0.60, 0, 0.20, 1], delay: i[1] },
  }),
};

const getLetter = (name) => {
  return name.split("").map((letter, index) => (
    <motion.span
      variants={letterAnim}
      initial="initial"
      animate="enter"
      custom={[index * 0.04, (name.length - index) * 0.01]}
      exit="exit"
      key={index}
    >
      {letter}
    </motion.span>
  ));
};

const heightAnimation = {
  initial: { height: 0 },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
  },
  closed: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
  }
};

const MobileNav = ({ isOpen, closeNav, navLinks, active, setActive }) => (
  <motion.nav
    variants={heightAnimation}
    initial="initial"
    animate={isOpen ? "open" : "closed"}
    exit="closed"
    className="bg-primary overflow-hidden fixed z-[50] top-0 left-0 w-full"
  >
    <div className="container mx-auto h-full flex items-center justify-center relative">
      {/* Close button */}
      <button
        onClick={closeNav}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black-100 hover:bg-black-200 transition-colors"
        aria-label="Close menu"
      >
        <img src={close} alt="close" className="w-7 h-7 object-contain" />
      </button>
      <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
        {navLinks.map((nav, index) => (
          <Link
            to={nav.path}
            key={nav.id}
            className={`flex overflow-hidden hover:text-white transition-all ${active === nav.title ? 'text-white' : ''}`}
            onClick={() => {
              setActive(nav.title);
              closeNav();
            }}
          >
            {getLetter(nav.title)}
          </Link>
        ))}
      </ul>
    </div>
  </motion.nav>
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-11 h-11 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
          ROTARACT  &nbsp;
            <span className='sm:block hidden'> | KDUSC</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={mobileNavOpen ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain z-50 transition-transform duration-300 cursor-pointer'
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          />
        </div>
        {/* Animated Mobile Nav */}
        <MobileNav 
          isOpen={mobileNavOpen} 
          closeNav={() => setMobileNavOpen(false)} 
          navLinks={navLinks}
          active={active}
          setActive={setActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
