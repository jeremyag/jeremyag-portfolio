import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.styles.scss";

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const experiences = [
    {
      year: "July 2021 - Present",
      works: [
        {
          name: "Software Engineer",
          description: "Luxclusif | Makati, Philippines",
        },
      ],
    },
    {
      year: "May 2019 - Jul 2021",
      works: [
        {
          name: "Junior Developer",
          description: "Luxclusif | Makati, Philippines",
        },
      ],
    },
    {
      year: "Jan 2019 - Apr 2019",
      works: [
        { name: "Intern", description: "Luxclusif | Makati, Philippines" },
      ],
    },
  ];

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query).then((data) => {
    //   setExperiences(data);
    // });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <table className="table-experience">
            <tbody>
              {experiences.map((experience) => (
                <tr className="app__skills-exp-item" key={experience.year}>
                  <td>
                    <div className="app__skills-exp-year">
                      <p className="bold-text text-right">{experience.year}</p>
                    </div>
                  </td>
                  <td>
                    <motion.div className="app__skills-exp-works">
                      {experience.works.map((work) => (
                        <div key={work.name}>
                          <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-exp-work"
                            // data-tip
                            // data-for={work.name}
                          >
                            <h4 className="bold-text">{work.name}</h4>
                            <p className="p-text">{work.description}</p>
                          </motion.div>
                          {/* <ReactTooltip
                            id={work.name}
                            effect="solid"
                            arrowColor="#fff"
                            className="skills-tooltip"
                          >
                            {work.desc}
                          </ReactTooltip> */}
                        </div>
                      ))}
                    </motion.div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
