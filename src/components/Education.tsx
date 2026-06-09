"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Education.module.css";
import Tilt from "react-parallax-tilt";
import SplitTextReveal from "./SplitTextReveal";

const educationData = [
  {
    date: "Sept 2023 – Present",
    degree: "B.Tech in Computer Science",
    institution: "Vellore Institute of Technology",
    score: "CGPA: 8.79 / 10.0",
  },
  {
    date: "Graduated 2023",
    degree: "Class 12, CBSE",
    institution: "Goodley Public School",
    score: "Score: 87.8%",
  },
  {
    date: "Graduated 2021",
    degree: "Class 10, CBSE",
    institution: "Goodley Public School",
    score: "Score: 94.2%",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="section container" id="education" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">
          <SplitTextReveal text="Education" accentWords={[0]} gradientSweep />
        </h2>

        <div className={styles.timeline} ref={lineRef}>
          <motion.div
            className={styles.timelineLine}
            initial={{ scaleY: 0 }}
            animate={lineInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className={styles.timelineDot}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3, type: "spring" }}
              />
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <div className={`${styles.timelineContent} glass-card`}>
                  <span className={styles.date}>{edu.date}</span>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <div className={styles.institution}>{edu.institution}</div>
                  <div className={styles.score}>{edu.score}</div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
