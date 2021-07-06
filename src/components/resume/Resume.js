import React from "react";
import Bar from "../UI/Bar";
import { motion } from "framer-motion";
import { tools, languages } from "../data/resume_data";
import "./resume.css";

const Resume = () => {
  const resume_variants = {
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
    <motion.div className="container resume" variants={resume_variants} initial="hidden" animate="visible" exit="exit">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">MSc (Information Technology)</h5>
            <p className="resume-card__name">Gaya College, Gaya (2019-2021)</p>
            <p className="resume-card__details">
              I am currently pursuing MSc in Information Technology from Gaya College, Gaya (2019-2021).
            </p>

            <h5 className="resume-card__title">BSc (Information Technology)</h5>
            <p className="resume-card__name">Gaya College, Gaya (2019-2021)</p>
            <p className="resume-card__details">
              I have completed BSc in Information Technology from Gaya College, Gaya (2016-2019).
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Tech Altum (2021)</h5>
            <p className="resume-card__name">MERN Stack</p>
            <p className="resume-card__details">
              I have completed the MERN stack course and also completed some projects.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
