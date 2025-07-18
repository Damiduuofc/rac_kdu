import {
  web,
  mobile,
  backend,
  creator,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";
import Omalya from "../assets/team_members/Rtr.Omalya.jpeg";
import Maljini from "../assets/team_members/Maljini.jpg";
import Asel from "../assets/team_members/Asel.jpeg";
import Kimuthu from "../assets/team_members/Rtr.Kimuthu.jpeg";
import Sithija from "../assets/team_members/Rtr.Sithija.jpeg";
import Thusara from "../assets/team_members/Rtr.Thusara.jpeg";
import Damidu from "../assets/team_members/Rtr.Damidu.jpeg";
import Thashuni from "../assets/team_members/Rtr.Thasuni.jpeg";
import Beenu from "../assets/team_members/Rtr.Beenu.jpeg";
import Lahiru from "../assets/team_members/Rtr.Lahiru.png";
import Gamika from "../assets/team_members/Rtr.Gamika.jpeg";
import Jayadi from "../assets/team_members/Jayadi.jpeg";
import Nipuni from "../assets/team_members/Nipuni.jpeg";
import Thisara from "../assets/team_members/Thisara.jpeg";
import Vishwani from "../assets/team_members/Vishwani.jpeg";
import Samudi from "../assets/team_members/Samudi.jpg";
import Nethmi from "../assets/team_members/Nethmi.jpeg";
import Jithmi from "../assets/team_members/Jithmi.jpg";
import Sachin from "../assets/team_members/Sachin.jpeg";
import Thimaya from "../assets/team_members/Thimaya.jpeg";
import Nethmi1 from "../assets/team_members/Nethmi1.jpeg";
import Isuri from "../assets/team_members/Isuri.jpeg";
import Imasha from "../assets/team_members/Imasha.jpeg";
import Raviru from "../assets/team_members/Raviru.jpeg";
import Sasi from "../assets/team_members/Sasi.jpeg";
import Delhi from "../assets/team_members/Delhi.jpeg";
import Sandali from "../assets/team_members/Sandali.jpeg";
import Bhagya from "../assets/team_members/Bagya.jpeg";
import Shanika from "../assets/team_members/Shanika.jpeg";
import Ganguli from "../assets/team_members/Ganguli.jpeg";
import Sarasi from "../assets/team_members/Sarasi.jpeg";

export const navLinks = [
  { id: "about", title: "About Us", path: "/about" },
  { id: "team", title: "Our Team", path: "/team" },
  { id: "projects", title: "Projects", path: "/projects" },
  { id: "blog", title: "Blog", path: "/blog" },
  { id: "gallery", title: "Gallery", path: "/gallery" },
  { id: "contact", title: "Contact", path: "/contact" },
];

export const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const teamMembers = [

    // Executive Members
    { name: "Rtr. Omalya Athapattu", position: "President", photo: Omalya, category: "executive" },
    { name: "Rtr. Asel Kumarage", position: "Vice President", photo: Asel, category: "executive" },
    { name: "Rtr. Sithija Dassanayake", position: "Secretary", photo: Sithija, category: "executive" },
    { name: "Rtr. Kimuthu Balasooriya", position: "Secretary", photo: Kimuthu, category: "executive" },
    { name: "Rtr. Maljini", position: "Assistant Secretary", photo: Maljini, category: "executive" },
    { name: "Rtr. Lahiru Senadheera", position: "Treasurer", photo: Lahiru, category: "executive" },
    { name: "Rtr. Beenu Savindi", position: "Treasurer", photo: Beenu, category: "executive" },
    { name: "Rtr. Gamika Sathyana", position: "Sergeant-at-Arms", photo: Gamika, category: "executive" },
    { name: "Rtr. Thusara", position: "Editor", photo: Thusara, category: "executive" },
    { name: "Rtr. Damidu Abeysinghe", position: "Editor", photo: Damidu, category: "executive" },
    { name: "Rtr. Thashuni Gunarathne", position: "Editor", photo: Thashuni, category: "executive" },
  
    // BOD Members
    { name: "Rtr. Jayadi Udara", position: "IT Director", photo: Jayadi, category: "BOD" },
    { name: "Rtr. Nipuni Wijenayaka", position: "IT Director", photo: Nipuni, category: "BOD" },
    { name: "Rtr. Thisara", position: "IT Director", photo: Thisara, category: "BOD" },
    { name: "Rtr. Vishwani Yashodara", position: "Finance Director", photo: Vishwani, category: "BOD" },
    { name: "Rtr. Samudi Rathnayake", position: "Finance Director", photo: Samudi, category: "BOD" },
    { name: "Rtr. Nethmi Somathilaka", position: "Membership Development Director", photo: Nethmi, category: "BOD" },
    { name: "Rtr. Jithmi Perera", position: "Membership Development Director", photo: Jithmi, category: "BOD" },
    { name: "Rtr. Sachin", position: "Public Relations Director", photo: Sachin, category: "BOD" },
    { name: "Rtr. Thimaya", position: "Public Relations Director", photo: Thimaya, category: "BOD" },
    { name: "Rtr. Nethmi Kavindya", position: "Professional Development Director", photo: Nethmi1, category: "BOD" },
    { name: "Rtr. Sarasi", position: "Professional Development Director", photo: Sarasi, category: "BOD" },
    { name: "Rtr. Isuri Kulasinghe", position: "Community Service Director", photo: Isuri, category: "BOD" },
    { name: "Rtr. Imasha Jayasekara", position: "Community Service Director", photo: Imasha, category: "BOD" },
    { name: "Rtr. Raviru Ranawake", position: "Community Service Director", photo: Raviru, category: "BOD" },
    { name: "Rtr. Delhi Chamindi", position: "Club Service Director", photo: Delhi, category: "BOD" },
    { name: "Rtr. Sandali Nirmani", position: "Club Service Director", photo: Sandali, category: "BOD" },
    { name: "Rtr. Sasi Tanisha", position: "Peace and Reconciliation Director", photo: Sasi, category: "BOD" },
    { name: "Rtr. Bhagya Dewmini", position: "Sports Director", photo: Bhagya, category: "BOD" },
    { name: "Rtr. Shanika Gimhani", position: "Environment Director", photo: Shanika, category: "BOD" },
    { name: "Rtr. Ganguli Geenatigala", position: "Rotary Public Relations & International Service Director", photo: Ganguli, category: "BOD" }
  ];
  

