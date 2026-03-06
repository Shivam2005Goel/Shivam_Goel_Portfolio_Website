"use client";

import {
  Github, Linkedin, Mail, Phone, ExternalLink, Calendar,
  Trophy, Server, Code, Database, Brain, Rocket,
  Terminal, GraduationCap, Briefcase
} from "lucide-react";

import {
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaJava, FaGitAlt, FaGithub
} from "react-icons/fa";

import {
  SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb, SiCplusplus, SiJavascript,
  SiHtml5, SiCss, SiExpress, SiRedux, SiScikitlearn, SiMysql, SiFirebase, SiTailwindcss
} from "react-icons/si";

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import styles from "./page.module.css";

// Skills Data structured for rendering
const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={24} className="text-accent" />,
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <Server size={24} className="text-accent" />,
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Databases & Cloud",
    icon: <Database size={24} className="text-accent" />,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
    ]
  }
];

// Reusable Map for Background Floating Icons
const floatingIconsMap = [
  { Icon: FaReact, top: "15%", left: "10%", size: 60, delay: 0 },
  { Icon: SiNextdotjs, top: "25%", left: "80%", size: 80, delay: 0.5 },
  { Icon: FaPython, top: "60%", left: "5%", size: 50, delay: 1 },
  { Icon: SiPostgresql, top: "70%", left: "85%", size: 70, delay: 1.5 },
  { Icon: SiTypescript, top: "85%", left: "15%", size: 45, delay: 2 },
  { Icon: FaDocker, top: "40%", left: "90%", size: 55, delay: 2.5 },
  { Icon: FaAws, top: "35%", left: "15%", size: 65, delay: 3 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="blob blob-purp" />
      <div className="blob blob-blue" />
      <div className="blob blob-pink" />

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#" className={styles.logo}>
            Shivam <span>Goel</span>
          </a>
          <div className={styles.navLinks}>
            <a href="#about" className="font-medium">About</a>
            <a href="#experience" className="font-medium">Experience</a>
            <a href="#projects" className="font-medium">Projects</a>
            <a href="#skills" className="font-medium">Skills</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className={`container ${styles.hero}`} id="about">
          {floatingIconsMap.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.floatingSymbol}
              style={{ top: item.top, left: item.left }}
              initial={{ y: 0, rotateZ: 0, opacity: 0 }}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 15, -15, 0],
                opacity: 0.15,
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                opacity: { duration: 1, ease: "linear" }
              }}
            >
              <item.Icon size={item.size} />
            </motion.div>
          ))}

          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="badge mb-6"
            >
              Available for Hire
            </motion.div>

            <h1 className="heading-1 select-none">
              <motion.span
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                style={{ display: "inline-block" }}
              >
                Hi, I'm Shivam Goel
              </motion.span>
            </h1>

            <motion.h2
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 1, type: "spring" }}
              className="text-2xl md:text-3xl font-bold mb-6 gradient-text"
            >
              Full-Stack Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lead text-center"
            >
              I build scalable, AI-powered applications and robust backend systems.
              Passionate about problem solving, data engineering, and creating
              seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={styles.socialLinks}
            >
              <a href="mailto:shivamgoel0808@gmail.com" className={styles.iconLink} title="Email">
                <Mail size={22} />
              </a>
              <a href="tel:+918287031386" className={styles.iconLink} title="Phone">
                <Phone size={22} />
              </a>
              <a href="https://www.linkedin.com/in/shivam-goel-5ba3b524b/" className={styles.iconLink} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/Shivam2005Goel" className={styles.iconLink} target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github size={22} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Education */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="container section" id="education"
        >
          <h2 className="heading-2">
            <GraduationCap className="text-accent inline mr-2" /> Education
          </h2>
          <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={1000} className={styles.tiltCard}>
            <div className="glass-card">
              <div className="flex justify-between flex-wrap gap-4 items-center">
                <div>
                  <h3 className="heading-3">Vellore Institute of Technology</h3>
                  <p className="text-accent-light font-medium mt-1">B.Tech in Computer Science</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end opacity-80 mb-2">
                    <Calendar size={16} /> <span className="text-sm">Sept 2023 – Present</span>
                  </div>
                  <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 font-bold text-lg text-accent-light">
                    CGPA: 8.79 / 10.0
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="container section" id="experience"
        >
          <h2 className="heading-2">
            <Briefcase className="text-accent inline mr-2" /> Work Experience
          </h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={1500} className={styles.tiltCard}>
                <div className="glass-card">
                  <div className={`flex justify-between flex-wrap gap-4 items-start mb-6 ${styles.projectHeader}`}>
                    <div>
                      <h3 className="heading-3">Bluestock Fintech</h3>
                      <p className="text-accent-light font-semibold text-lg">SDE Intern</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      <Calendar size={14} /> <span className="text-sm">Oct 2025 – Nov 2025</span>
                    </div>
                  </div>
                  <ul className={styles.featureList}>
                    <li>Co-led development of <strong>Bluestock IPO Tracker</strong>, a full-stack platform with React + Tailwind frontend (protected routes, responsive UI) and Django REST APIs with PostgreSQL backend.</li>
                    <li>Implemented JWT authentication, real-time token handling, and secure session management to ensure platform reliability and security.</li>
                  </ul>
                </div>
              </Tilt>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="container section" id="projects"
        >
          <h2 className="heading-2">
            <Rocket className="text-accent inline mr-2" /> Featured Projects
          </h2>
          <div className="grid grid-cols-2">

            {/* Project 1 */}
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} transitionSpeed={1000} className={styles.tiltCard}>
              <div className={`glass-card ${styles.projectCard}`}>
                <div className={styles.projectHeader}>
                  <h3 className="heading-3">GyanGrow</h3>
                  <div className={styles.projectLinks}>
                    <a href="https://gyan-grow.vercel.app/" target="_blank" rel="noopener noreferrer" title="View Live"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <p className="text-accent-light font-medium mb-6 text-sm transform translate-z-[10px]">AI-Powered Campus Operating System</p>
                <div className="flex flex-wrap gap-2 mb-4 transform translate-z-[10px]">
                  <span className="badge"><SiNextdotjs className="mr-1" /> Next.js</span>
                  <span className="badge"><FaReact className="mr-1" /> React 19</span>
                  <span className="badge"><SiTypescript className="mr-1" /> TypeScript</span>
                  <span className="badge"><Brain className="mr-1" /> Gemini</span>
                </div>
                <ul className={styles.featureList}>
                  <li>Built a full-stack campus OS with 40+ integrated features unifying academic tools and productivity utilities into a single platform.</li>
                  <li>Integrated Google Gemini AI, Tesseract.js OCR, and Vapi Voice AI for intelligent features.</li>
                </ul>
              </div>
            </Tilt>

            {/* Project 2 */}
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} transitionSpeed={1000} className={styles.tiltCard}>
              <div className={`glass-card ${styles.projectCard}`}>
                <div className={styles.projectHeader}>
                  <h3 className="heading-3">GO-GREEN</h3>
                  <div className={styles.projectLinks}>
                    <a href="https://github.com/Shivam2005Goel/Sustainability_Carbon_hackathon" target="_blank" rel="noopener noreferrer" title="View Source"><Github size={18} /></a>
                  </div>
                </div>
                <p className="text-accent-light font-medium mb-6 text-sm transform translate-z-[10px]">Logistics & Warehouse API</p>
                <div className="flex flex-wrap gap-2 mb-4 transform translate-z-[10px]">
                  <span className="badge"><FaReact className="mr-1" /> React</span>
                  <span className="badge"><FaNodeJs className="mr-1" /> Node.js</span>
                  <span className="badge"><SiPostgresql className="mr-1" /> SQL</span>
                  <span className="badge"><FaAws className="mr-1" /> AWS</span>
                </div>
                <ul className={styles.featureList}>
                  <li>Built APIs managing 20+ warehouses and 500+ products with secure multi-user access via Amazon RDS and AWS CloudFront.</li>
                  <li>Reduced delivery distance by 15% using route optimization.</li>
                </ul>
              </div>
            </Tilt>

            {/* Project 3 */}
            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} transitionSpeed={1000} className={styles.tiltCard} style={{ gridColumn: '1 / -1' }}>
              <div className={`glass-card ${styles.projectCard}`}>
                <div className={styles.projectHeader}>
                  <h3 className="heading-3">Clinical Trial Analytics</h3>
                  <div className={styles.projectLinks}>
                    <a href="https://clinical-data-analysis-hackathon-k3.vercel.app/" target="_blank" rel="noopener noreferrer" title="View Project"><ExternalLink size={18} /></a>
                  </div>
                </div>
                <p className="text-accent-light font-medium mb-5 text-sm transform translate-z-[10px]">AI-Powered Risk Monitoring (Novartis Dataset)</p>
                <div className="flex flex-wrap gap-2 mb-4 transform translate-z-[10px]">
                  <span className="badge"><FaPython className="mr-1" /> Python</span>
                  <span className="badge"><Database className="mr-1" /> Supabase</span>
                  <span className="badge"><Brain className="mr-1" /> GPT-4o</span>
                  <span className="badge"><SiFirebase className="mr-1" /> Firebase</span>
                </div>
                <ul className={styles.featureList}>
                  <li>Built an AI-powered clinical trial analytics platform using GPT-4o to analyze 10K+ records.</li>
                  <li>Reduced reporting time by 70% and identified high-risk trial sites proactively.</li>
                </ul>
              </div>
            </Tilt>

          </div>
        </motion.section>

        {/* Skills */}
        <section className="container section" id="skills">
          <h2 className="heading-2">
            <Terminal className="text-accent inline mr-2" /> Skills & Technologies
          </h2>
          <div className="flex flex-col gap-10">

            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              >
                <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={1500} className={styles.tiltCard}>
                  <div className="glass-card h-full">
                    <div className={styles.skillHeader}>
                      {category.icon}
                      <span>{category.title}</span>
                    </div>

                    <div className={styles.skillsGrid}>
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className={styles.skillBadge}>
                          <skill.icon
                            className={styles.skillIcon}
                            style={{ color: skill.color }}
                          />
                          <span className={styles.skillName}>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}

            {/* Specific extra section for Data & CS */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}>
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={1500} className={styles.tiltCard}>
                <div className="glass-card">
                  <div className={styles.skillHeader}>
                    <Brain size={24} className="text-accent" />
                    <span>Data Engineering & Core CS</span>
                  </div>
                  <div className="flex flex-wrap gap-3 transform translate-z-[10px]">
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">AI/NLP</span>
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">Prompt Engineering</span>
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">LangChain</span>
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">LLMs & RAG</span>
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">Vector Databases</span>
                    <div className="w-full mt-2 mb-1 border-b border-white/10" />
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">Data Structures & Algorithms</span>
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">Operating Systems</span>
                    <span className="badge text-sm py-2 px-4 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/20">Computer Networks</span>
                  </div>
                </div>
              </Tilt>
            </motion.div>

          </div>
        </section>

        {/* Achievements */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="container section pb-32"
        >
          <h2 className="heading-2">
            <Trophy className="text-accent inline mr-2" /> Achievements
          </h2>
          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} transitionSpeed={2000} className={styles.tiltCard}>
            <div className="glass-card text-lg">
              <ul className={styles.featureList}>
                <li>
                  <strong className="text-white">50 Days LeetCode Badge</strong> – Solved 250+ problems efficiently.
                  <a href="#" className="ml-3 text-accent hover:text-accent-light transition-colors text-sm inline-flex items-center bg-white/5 px-2 py-1 rounded-md border border-white/10">
                    <ExternalLink size={14} className="mr-1" /> View Profile
                  </a>
                </li>
                <li className="mt-6">
                  <strong className="text-white">NEST 2.0 National Hackathon Semi-Finalist (Novartis)</strong> – Ranked Top 30 out of 1600+ teams.
                </li>
                <li className="mt-6">
                  <strong className="text-white">2nd Place</strong> – BIS Quality Week Hackathon, VIT Chennai (2026).
                </li>
              </ul>
            </div>
          </Tilt>
        </motion.section>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p className="font-medium">© 2026 Shivam Goel. Crafted with Next.js, Framer Motion & standard UI elements.</p>
      </footer>
    </>
  );
}
