import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    let currentURL = window.location.href;
    if (currentURL.endsWith("/")) {
      setActive("About");
    } else if (currentURL.endsWith("/resume")) {
      setActive("Resume");
    } else if (currentURL.endsWith("/projects")) {
      setActive("Projects");
    }
  }, [active]);

  const handleClick = (evt) => {
    setActive(evt.target.innerText);
  };

  const navbar_variant = {
    hidden: {
      y: "-30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div className="navbar" variants={navbar_variant} initial="hidden" animate="visible">
      <div className="navbar__active">{active}</div>
      <div className="navbar__items">
        {active !== "About" && (
          <Link to="/">
            <div className="navbar__item" onClick={handleClick}>
              About
            </div>
          </Link>
        )}
        {active !== "Resume" && (
          <Link to="/resume">
            <div className="navbar__item" onClick={handleClick}>
              Resume
            </div>
          </Link>
        )}
        {active !== "Projects" && (
          <Link to="/projects">
            <div className="navbar__item" onClick={handleClick}>
              Projects
            </div>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
