import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./SocialMedia.styles.scss";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/jeremyag0/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin className="linkedin-color" />
    </a>
    <a href="https://github.com/jeremyag" target="_blank" rel="noreferrer">
      <BsGithub className="github-color" />
    </a>
  </div>
);

export default SocialMedia;
