import React from "react";
import "./../Styles/Technologies.css";
import { animate, motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { SiFlask } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

function Technologies() {
  const initialVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [-10, 10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="technologies-container" id="technologies">
      <h1 className="technologies-title">Technologies</h1>
      <div className="technologies-icon-container">
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <FaReact className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(3.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(2)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(1.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(3.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejs className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(4)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlask className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(2)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDocker className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(1)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(1.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className="item" size={50} />
        </motion.div>

        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(3.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNpm className="item" size={50} />
        </motion.div>
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="item-border rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="item" size={50} />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
