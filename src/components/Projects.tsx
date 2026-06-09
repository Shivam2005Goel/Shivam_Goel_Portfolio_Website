"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt, FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import SplitTextReveal from "./SplitTextReveal";

const projectsData = [
  {
    title: "IntelliTrace",
    shortDescription: "A 6-layer fraud detection engine targeting $5.2B+ in annual SCF fraud, detecting phantom invoices at sub-400ms latency.",
    fullDescription: "Real-Time Multi-Tier Supply-Chain Finance Fraud Detection & Intelligence Platform. When a single phantom invoice cascades through 3 tiers and 4 lenders, turning $138K into $47M of fraudulent exposure — traditional checks see nothing. IntelliTrace sees everything. Engineered a 6-layer deep fraud intelligence engine (Invoice DNA, Physics, Graph Topology, LLM Explainer, PSI, and SCF Intelligence) utilizing Neo4j, Redis, Gemini Pro, FastAPI, and Next.js.",
    image: "/project_intellitrace.png",
    tech: ["FastAPI", "Next.js", "Neo4j", "Redis", "Gemini Pro", "Docker"],
    github: "https://github.com/Shivam2005Goel/Intellitrace_hackathon",
    live: "#",
    initialLikes: 142,
  },
  {
    title: "GyanGrow",
    shortDescription: "Production-scale campus OS with 20+ components unifying timetable, attendance, AI tools, and placement.",
    fullDescription: "A full-stack Campus Operating System that unifies academics, career tools, campus navigation, social connectivity, and AI intelligence into a single glassmorphism dashboard. Replaces 15+ fragmented apps to handle everything from attendance tracking to AI mock interviews. Built with Next.js 16, React 19, and Google Gemini AI, featuring 42+ distinct features across 5 interconnected ecosystems including a Gamified Growth Engine (DhanGyan) and Deep Academics tools.",
    image: "/project_gyangrow.png",
    tech: ["Next.js", "React 19", "Gemini AI", "Vapi", "Tesseract.js"],
    github: "https://github.com/Shivam2005Goel/GyanGrow",
    live: "#",
    initialLikes: 215,
  },
  {
    title: "Clinical Data Monitoring",
    shortDescription: "Full-stack clinical trial platform with real-time DQI tracking and automated risk scoring. NEST 2.0 Semi-Finalist.",
    fullDescription: "Architected a full-stack clinical trial platform for real-time Data Quality Indicator (DQI) tracking and automated risk scoring. Shipped a GPT-powered report engine and enforced HIPAA-aligned data isolation via Supabase. Key features include Secure Login, User Registration, Sites Risk Analysis, Patient-Level Analysis, Data Quality Metrics, and AI-Powered Insights. Recognized as a NEST 2.0 Semi-Finalist (Top 30 out of 1600+ teams).",
    image: "/project_clinical.png",
    tech: ["Numpy", "Pandas", "Machine Learning", "Supabase"],
    github: "https://github.com/Shivam2005Goel/Clinical_Data_Analysis_Hackathon.git",
    live: "#",
    initialLikes: 89,
  },
  {
    title: "Go-Green",
    shortDescription: "Cloud-native WMS managing 20+ warehouses with JWT-secured APIs and advanced route optimization.",
    fullDescription: "A scalable, cloud-based warehouse and logistics management system designed to optimize inventory operations, reduce delivery distances, and promote sustainable supply chain practices. Built with secure JWT-based authentication to manage 20+ warehouses and 500+ products. Engineered route optimization logic cutting delivery distances by 15%, and an intelligent recommendation engine that reduced inventory mismatches by 20% while identifying pricing anomalies.",
    image: "/project_gogreen.png",
    tech: ["React", "Node.js", "PostgreSQL", "AWS RDS", "CloudFront"],
    github: "https://github.com/Shivam2005Goel/Sustainability_Carbon_hackathon.git",
    live: "#",
    initialLikes: 112,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const toggleLike = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="section container" id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">
          <SplitTextReveal text="Featured Projects" accentWords={[1]} gradientSweep />
        </h2>
        <p className="text-lead text-center mx-auto" style={{ marginBottom: "3rem" }}>
          Some of my best work — real-world problems solved with code.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.projectGrid}
        >
          {projectsData.map((project, index) => {
            const isLiked = likes[index];
            const currentLikes = project.initialLikes + (isLiked ? 1 : 0);

            return (
              <motion.div key={index} variants={item}>
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.02}
                  transitionSpeed={2500}
                  className={styles.tiltWrapper}
                >
                  <SpotlightCard className={styles.projectCard}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className={styles.projectImage}
                      />
                      <div className={styles.imageOverlay} />
                      <button 
                        className={styles.likeButton}
                        onClick={(e) => toggleLike(index, e)}
                        aria-label="Like project"
                      >
                        <motion.div
                          animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {isLiked ? (
                            <FaHeart className={styles.heartIconFilled} />
                          ) : (
                            <FaRegHeart className={styles.heartIcon} />
                          )}
                        </motion.div>
                        <span className={styles.likeCount}>{currentLikes}</span>
                      </button>
                    </div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>{project.title}</h3>
                      <p className={styles.description}>{project.shortDescription}</p>
                      <button 
                        className={styles.readMoreBtn}
                        onClick={() => setSelectedProject(project)}
                      >
                        Read More...
                      </button>
                      <div className={styles.techStack}>
                        {project.tech.map((tech, i) => (
                          <span key={i} className="badge">{tech}</span>
                        ))}
                      </div>
                      <div className={styles.links}>
                        <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                          <FaGithub /> Code
                        </a>
                        {/* live link commented out if empty/dummy to keep UI clean, but leaving it as requested */}
                        <a href={project.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                          <FaExternalLinkAlt /> Live
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeModalBtn}
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <div className={styles.modalImageContainer}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.modalImageGradient} />
              </div>

              <div className={styles.modalBody}>
                <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                
                <div className={styles.modalTechStack}>
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="badge">{tech}</span>
                  ))}
                </div>

                <div className={styles.modalFullDescription}>
                  <p>{selectedProject.fullDescription}</p>
                </div>

                <div className={styles.modalActions}>
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className={styles.modalBtnPrimary}>
                    <FaGithub /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
