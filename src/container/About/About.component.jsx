import React, { useState, useEffect } from "react";

import { AppWrap } from "../../wrapper";
import "./About.styles.scss";
import { TypingEffect } from "../../components";

function About() {
  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>
      <div className="app__profiles">
        <div className="app__profile-item">
          <h3 className="subhead-text">Personal Details</h3>
          <div className="border-dashed"></div>
          <p className="p-text">
            <span className="bold-text">Language:</span> Filipino, English
          </p>
          <p className="p-text">
            <span className="bold-text">Nationality:</span> Filipino
          </p>
          <p className="p-text">
            <span className="bold-text">Location:</span> Batangas, Philippines
          </p>
        </div>
        <div className="app__profile-item">
          <h3 className="app__about-title text-left">
            I am a{" "}
            <TypingEffect
              text={"Software Engineer"}
              listText={[
                "Software Engineer",
                "Web Developer",
                "Lifelong Learner",
              ]}
            />
            <div className="border-dashed"></div>
            <p className="p-text">
              I love to design and build softwares (especially web
              applications). Nowadays, I work with Web ERP and Systems
              Integrations.
            </p>
            <br />
            <p className="p-text">
              I am passionate about software development field. I consider
              myself as a Lifelong Learner and always find ways to enhance my
              skills.
            </p>
          </h3>
        </div>
      </div>
    </>
  );
}

export default AppWrap(About, "about");
