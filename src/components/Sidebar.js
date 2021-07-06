import React from "react";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin-app.svg";
import { ReactComponent as Github } from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import avatar from "../assets/projects_images/my_pic.jpg";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:prakash20kumar2000@gmail.com");
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div className="sidebar" variants={sidebar_variant} initial="hidden" animate="visible">
      <img src={avatar} alt="avatar" className="sidebar__avatar" />

      <div className="sidebar__name">
        Prakash <span>Kumar</span>
      </div>

      <div className="sidebar__item sidebar__title">Web Developer</div>

      <div className="sidebar__social-icons">
        <a href="https://www.facebook.com/prakash20kumar2000/" target="_blank" rel="noreferrer">
          <Facebook className="sidebar__icon mr-3" />
        </a>
        <a href="https://www.instagram.com/prakash99kumar1999/" target="_blank" rel="noreferrer">
          <Instagram className="sidebar__icon mr-3" />
        </a>
        <a href="https://www.linkedin.com/in/prakash20kumar/" target="_blank" rel="noreferrer">
          <LinkedIn className="sidebar__icon mr-3" />
        </a>
        <a href="https://github.com/prakash20kumar" target="_blank" rel="noreferrer">
          <Github className="sidebar__icon mr-3" />
        </a>
      </div>

      <div className="sidebar__contact">
        <div className="sidebar__location mt-2">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Bihar, India
        </div>
        <div className="sidebar__item">
          <a href="tel:+917992315671">+91 7992315671</a>
        </div>
      </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        Email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
