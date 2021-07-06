import React from "react";
import SkillCard from "../UI/SkillCard";
import { motion } from "framer-motion";
import skills from "../data/about_data";
import "./about.css";

function About() {
  const about_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div className="about" variants={about_variants} initial="hidden" animate="visible" exit="exit">
      <h6 className="about__intro">
        I am at present pursuing my Master's degree in Information Technology. I have a serious passion for Full stack
        web development. I ❤️ building responsive Websites and Web applications with amazing UI/UX.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I Offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
