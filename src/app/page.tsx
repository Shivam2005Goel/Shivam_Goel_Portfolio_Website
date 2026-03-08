"use client";

import {
  Github, Linkedin, Mail, Phone, ExternalLink, Calendar,
  Trophy, Server, Code, Database, Brain, Rocket,
  Terminal, GraduationCap, Briefcase, Star, Award
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

import Image from 'next/image';

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
            <div className={styles.heroContent}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="badge mb-6"
              >
                Available for Hire
              </motion.div>

              <h1 className="heading-1 select-none text-left">
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
                className="text-2xl md:text-3xl font-bold mb-6 gradient-text text-left"
              >
                Full-Stack Software Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lead text-left"
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

            <motion.div 
              className="relative flex justify-center items-center h-[300px] lg:h-[500px] w-full mt-10 lg:mt-0"
              initial={{ opacity: 0, scale: 0.5, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, type: "spring", bounce: 0.3, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 to-[#EC4899]/20 blur-3xl rounded-full scale-150 transform -translate-y-10"></div>
              <motion.div
                animate={{ y: [-15, 15, -15], rotateZ: [-2, 2, -2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                <Image 
                  src="/isometric-tech.png" 
                  alt="3D Tech Setup" 
                  fill
                  style={{ objectFit: 'contain' }}
                  priority 
                />
              </motion.div>
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
          <div className="flex flex-col gap-6">
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

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={1000} className={styles.tiltCard}>
              <div className="glass-card">
                <div className="flex justify-between flex-wrap gap-4 items-center">
                  <div>
                    <h3 className="heading-3">Goodley Public School</h3>
                    <p className="text-accent-light font-medium mt-1">Class 12, Central Board of Secondary Education</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 font-bold text-lg text-accent-light">
                      Score: 87.8%
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.01} transitionSpeed={1000} className={styles.tiltCard}>
              <div className="glass-card">
                <div className="flex justify-between flex-wrap gap-4 items-center">
                  <div>
                    <h3 className="heading-3">Goodley Public School</h3>
                    <p className="text-accent-light font-medium mt-1">Class 10, Central Board of Secondary Education</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10 font-bold text-lg text-accent-light">
                      Score: 94.2%
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
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
          <div className="flex items-center justify-between mb-10 text-center md:text-left">
            <h2 className="heading-2 mb-0 flex items-center justify-center md:justify-start w-full">
              <Trophy className="text-accent inline mr-3 mb-1" size={32} /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Achievements</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Achievement 1 */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03} transitionSpeed={1000} className={styles.tiltCard}>
              <div className="glass-card h-full flex flex-col justify-center items-center text-center p-8 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center mb-6 text-[#A78BFA] group-hover:scale-110 group-hover:bg-[#8B5CF6]/20 transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] group-hover:text-white">
                  <Code size={36} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide">50 Days LeetCode Badge</h3>
                <p className="text-accent-light text-sm mb-8 flex-grow leading-relaxed">Solved 250+ problems efficiently, mastering data structures and complex algorithms.</p>
                
                <a href="#" className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 hover:gap-3 group-hover:border-[#8B5CF6]/50">
                  View Profile <ExternalLink size={16} className="text-[#A78BFA]" />
                </a>
              </div>
            </Tilt>

            {/* Achievement 2 */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03} transitionSpeed={1000} className={styles.tiltCard}>
              <div className="glass-card h-full flex flex-col justify-center items-center text-center p-8 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F43F5E]/10 to-[#F97316]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center mb-6 text-[#FB7185] group-hover:scale-110 group-hover:bg-[#F43F5E]/20 transition-all duration-500 shadow-[0_0_15px_rgba(244,63,94,0.15)] group-hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] group-hover:text-white">
                  <Star size={36} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide">NEST 2.0 Semi-Finalist</h3>
                <p className="text-accent-light text-sm mb-6 flex-grow leading-relaxed">National Hackathon sponsored by Novartis. Built an innovative healthcare solution.</p>
                
                <div className="inline-block mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-[#F43F5E]/10 to-[#F97316]/10 border border-[#F43F5E]/30 text-xs text-[#FDA4AF] font-bold tracking-wider uppercase">
                  Top 30 of 1600+ Teams
                </div>
              </div>
            </Tilt>

            {/* Achievement 3 */}
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.03} transitionSpeed={1000} className={styles.tiltCard}>
              <div className="glass-card h-full flex flex-col justify-center items-center text-center p-8 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-colors lg:col-span-1 md:col-span-2 md:w-1/2 md:mx-auto lg:w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-[#06B6D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center mb-6 text-[#34D399] group-hover:scale-110 group-hover:bg-[#10B981]/20 transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] group-hover:text-white">
                  <Award size={36} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-wide">2nd Place, BIS Hackathon</h3>
                <p className="text-accent-light text-sm mb-6 flex-grow leading-relaxed">Quality Week Hackathon organized at Vellore Institute of Technology, Chennai (2026).</p>
                
                <div className="inline-block mt-auto px-5 py-2 rounded-full bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/30 text-xs text-[#6EE7B7] font-bold tracking-wider uppercase">
                  Runner Up
                </div>
              </div>
            </Tilt>
          </div>
        </motion.section>
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0', textAlign: 'center', color: 'var(--text-muted)' }}>
        <p className="font-medium">© 2026 Shivam Goel. Crafted with Next.js, Framer Motion & standard UI elements.</p>
      </footer>
    </>
  );
}
