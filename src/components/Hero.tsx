"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const socials = [
  { icon: FaGithub, href: "https://github.com/Shivam2005Goel", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shivam-goel-5ba3b524b/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/Shivam_Goel1312/", label: "LeetCode" },
];

export default function Hero() {
  return (
    <section className={styles.heroSection} id="hero">
      {/* Background pulse blobs */}
      <div className={styles.bgBlobs}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={styles.blobOne}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={styles.blobTwo}
        />
      </div>

      <div className={styles.content}>
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.leftColumn}
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.badge}
          >
            <span className={styles.badgeDot} />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.greeting}
          >
            <TypeAnimation
              sequence={[
                "Namaste, I'm",
                1500,
                "Hello, I'm",
                1500,
                "Hola, I'm",
                1500,
                "Bonjour, I'm",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.title}
          >
            Shivam <span className={styles.gradientName}>Goel</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={styles.roleWrapper}
          >
            <span className={styles.rolePrefix}>I build </span>
            <TypeAnimation
              sequence={[
                "scalable web apps",
                2000,
                "AI-powered solutions",
                2000,
                "high-performance systems",
                2000,
                "fintech platforms",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className={styles.roleText}
            />
            <span className={styles.cursor}>|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={styles.description}
          >
            B.Tech CS student at VIT Chennai. I turn complex problems into elegant, 
            efficient software. Passionate about full-stack development, AI/ML, and 
            building products that make an impact.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={styles.socials}
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <social.icon size={20} />
                <span className={styles.socialTooltip}>{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={styles.actions}
          >
            <a href="#contact" className={styles.btnGradient}>
              <span className={styles.btnInner}>
                Contact Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#projects" className={styles.btnOutline}>
              View My Work
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className={styles.rightColumn}
        >
          <div className={styles.photoContainer}>
            {/* Background glow */}
            <motion.div
              className={styles.photoGlow}
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Photo wrapper with hover effects */}
            <div className={styles.photoWrapper}>
              <div className={styles.photoBorder} />
              <div className={styles.photoInner}>
                <Image
                  src="/Shivam Goel_img.jpg"
                  alt="Shivam Goel"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 280px, 380px"
                />
                {/* Overlay ring */}
                <div className={styles.photoRing} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className={styles.scrollIndicator}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className={styles.scrollMouse}
        >
          <motion.div className={styles.scrollDot} />
        </motion.div>
      </motion.div>
    </section>
  );
}
