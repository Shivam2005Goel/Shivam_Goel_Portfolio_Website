"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Achievements.module.css";
import Tilt from "react-parallax-tilt";
import { FaCode, FaStar, FaMedal, FaTrophy } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import SplitTextReveal from "./SplitTextReveal";

const achievements = [
  {
    icon: FaCode,
    title: "50 Days LeetCode Badge",
    description: "Solved 250+ algorithmic problems efficiently, mastering core data structures and complex algorithms. Consistent daily coding streak.",
    badge: "Top Problem Solver",
  },
  {
    icon: FaStar,
    title: "NEST 2.0 Semi-Finalist",
    description: "National Hackathon sponsored by Novartis. Architected an innovative AI-powered healthcare solution for clinical data monitoring.",
    badge: "Top 30 of 1600+ Teams",
  },
  {
    icon: FaMedal,
    title: "2nd Place, BIS Hackathon",
    description: "Quality Week Hackathon organized at Vellore Institute of Technology, Chennai (2026). Developed high-impact technical solution.",
    badge: "Runner Up",
  },
  {
    icon: FaTrophy,
    title: "LeetCode Rating 1510",
    description: "Consistently solving medium and hard problems across arrays, graphs, dynamic programming, and system design.",
    badge: "Knight Level",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section container" id="achievements" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">
          <SplitTextReveal text="My Achievements" accentWords={[1]} gradientSweep />
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.grid}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <SpotlightCard className={styles.achievementCard}>
                  <div className={styles.iconWrapper}>
                    <achievement.icon />
                  </div>
                  <h3 className={styles.title}>{achievement.title}</h3>
                  <p className={styles.description}>{achievement.description}</p>
                  <div className={styles.badge}>{achievement.badge}</div>
                </SpotlightCard>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
