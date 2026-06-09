"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import SplitTextReveal from "./SplitTextReveal";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section container" id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">
          <SplitTextReveal text="About Me" accentWords={[1]} gradientSweep />
        </h2>

        <div className={styles.contentWrapper}>
          <motion.div
            className={`${styles.textContent} glass-card`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="heading-3">My Story</h3>
            <p className="text-lead">
              I am a passionate software engineer with a strong foundation in Full-Stack
              development and Data-Driven solutions. Currently pursuing my B.Tech in Computer
              Science with a specialization in AI/ML at VIT Chennai, I enjoy turning complex
              problems into elegant, efficient, and scalable software.
            </p>
            <p className="text-lead">
              My journey has led me to work with an array of technologies including React,
              Next.js, Python, Node.js, and PostgreSQL. Whether it is building a high-speed fraud
              detection engine or architecting a robust clinical data platform, I am driven by
              innovation and performance.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={1510} />
                </div>
                <div className={styles.statLabel}>LeetCode Rating</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={4} suffix="+" />
                </div>
                <div className={styles.statLabel}>Major Projects</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={3} suffix="+" />
                </div>
                <div className={styles.statLabel}>Hackathon Wins</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>
                  <AnimatedCounter target={250} suffix="+" />
                </div>
                <div className={styles.statLabel}>Problems Solved</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.visualContent}
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          >
            <motion.div
              className={styles.imageWrapper}
              animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "transparent", boxShadow: "none" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-light)]/20 blur-3xl rounded-full scale-150" />
              <Image
                src="/isometric-tech.png"
                alt="3D Tech Setup"
                fill
                style={{ objectFit: "contain", filter: "drop-shadow(0 0 20px rgba(16,185,129,0.3))" }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
