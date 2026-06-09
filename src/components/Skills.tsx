"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Skills.module.css";
import {
  SiCplusplus, SiPython, SiNextdotjs, SiReact,
  SiNodedotjs, SiExpress, SiRedux, SiMongodb,
  SiMysql, SiPostgresql, SiSupabase, SiGit,
  SiDocker, SiVercel, SiTypescript, SiTailwindcss,
  SiPrisma, SiFirebase
} from "react-icons/si";
import { FaAws, FaLinux } from "react-icons/fa";
import SplitTextReveal from "./SplitTextReveal";

const skillsList = [
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express", icon: <SiExpress />, color: "#ffffff" },
  { name: "Prisma", icon: <SiPrisma />, color: "#ffffff" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
  { name: "Linux", icon: <FaLinux />, color: "#FCC624" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.skillsSection} id="skills" ref={ref}>
      <div className="container">
        <h2 className="heading-2 text-center" style={{ marginBottom: "2rem" }}>
          <SplitTextReveal text="Technical Arsenal" accentWords={[1]} gradientSweep />
        </h2>
        <p className="text-lead text-center mx-auto" style={{ marginBottom: "3rem" }}>
          Technologies I use to bring ideas to life.
        </p>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.marqueeItem}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className={styles.icon} style={{ color: skill.color }}>{skill.icon}</div>
              <span className={styles.name}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
        <div className={styles.marquee} aria-hidden="true">
          {skillsList.map((skill, index) => (
            <div key={`dup-${index}`} className={styles.marqueeItem}>
              <div className={styles.icon} style={{ color: skill.color }}>{skill.icon}</div>
              <span className={styles.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
