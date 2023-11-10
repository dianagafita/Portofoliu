import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "./logo.png";

const navigatioList = [
  {
    name: "home",
    title: "Home",
    offset: -100,
  },
  {
    name: "about",
    title: "About",
    offset: -80,
  },
  {
    name: "projects",
    title: "Projects",
    offset: -50,
  },
  {
    name: "contact",
    title: "Contact",
    offset: -10,
  },
];

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />

      <div className="menu">
        {navigatioList.map((item) => (
          <Link
            activeClass="active"
            to={item.name}
            spy={true}
            smooth={true}
            duration={500}
            offset={item.offset}
            className="menuListItem"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <motion.button
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="menuButton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <FaPhone className="phoneStyle" /> Contact me
      </motion.button>
      <motion.button
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="burger"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiOutlineMenuAlt3 className="burgerStyle" />
      </motion.button>
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        {navigatioList.map((item) => (
          <Link
            activeClass="active"
            to={item.name}
            spy={true}
            smooth={true}
            duration={500}
            offset={item.offset}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
