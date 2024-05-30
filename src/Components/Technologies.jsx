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
          className="rounded-2xl  border-4 border-neutral-800 p-4"
        >
          <FaReact size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejs size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlask size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaDocker size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaCss3 size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt size={50} text-8xl />
        </motion.div>

        <motion.div
          variants={initialVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiDjango size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNpm size={50} text-8xl />
        </motion.div>
        <motion.div
          variants={initialVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws size={50} text-8xl />
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;
