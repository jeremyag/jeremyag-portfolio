import React from "react";
import { motion } from "framer-motion";
import { image, images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Header.styles.scss";

function Header() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app__header" id="home">
      <div className="app__header-introduction">
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="p-text">Mabuhay!</p>
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="head-text">
            I am Jeremy <span>Agcaoili.</span>
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
        >
          <p className="p-text">I'm a passionate Software Engineer.</p>
        </motion.div>
      </div>

      {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Jeremy</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">Web developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="my profile"></img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay-circle"
          src={images.circle}
          alt="profile circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="technologies logo" />
          </div>
        ))}
      </motion.div> */}
    </div>
  );
}

export default AppWrap(Header, "home");
