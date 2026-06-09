"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Contact.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import TextScramble from "./TextScramble";

const contactCards = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "shivamgoel0808@gmail.com",
    href: "mailto:shivamgoel0808@gmail.com",
    color: "#10b981",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 82870 31386",
    href: "tel:+918287031386",
    color: "#3b82f6",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "VIT Chennai, Tamil Nadu",
    href: "https://maps.google.com/?q=VIT+Chennai",
    color: "#f59e0b",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/Shivam2005Goel",
    label: "GitHub",
    color: "#e2e8f0",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/shivam-goel-5ba3b524b/",
    label: "LinkedIn",
    color: "#0ea5e9",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/Shivam_Goel1312/",
    label: "LeetCode",
    color: "#f59e0b",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.contactSection} id="contact" ref={ref}>
      {/* Top glow */}
      <div className={styles.topGlow} />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.sectionLabel}>GET IN TOUCH</span>
          <h2 className={styles.title}>
            Let&apos;s Build{" "}
            <span className="text-accent">
              <TextScramble text="Together" trigger={isInView} />
            </span>
          </h2>
          <p className={styles.subtitle}>
            I&apos;m currently open to new opportunities, internships, and
            exciting collaborations. Whether you have a project in mind, a
            question, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className={styles.cardsGrid}>
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className={styles.contactCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div
                className={styles.cardIcon}
                style={{
                  background: `${card.color}18`,
                  border: `1px solid ${card.color}40`,
                  color: card.color,
                }}
              >
                <card.icon size={22} />
              </div>
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>{card.label}</span>
                <span className={styles.cardValue}>{card.value}</span>
              </div>
              <FaArrowRight className={styles.cardArrow} size={14} />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.ctaWrapper}
        >
          <motion.a
            href="mailto:shivamgoel0808@gmail.com"
            className={styles.contactBtn}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaEnvelope />
            Send Me an Email
            <FaArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={styles.socialRow}
        >
          {socialLinks.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={styles.socialPill}
              whileHover={{ y: -4, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{ "--pill-color": s.color } as React.CSSProperties}
            >
              <s.icon size={18} />
              <span>{s.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerDivider} />
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Shivam Goel &mdash; Crafted with
            Next.js, Framer Motion &amp; lots of ☕
          </p>
          <p className={styles.footerSub}>
            Vellore Institute of Technology, Chennai
          </p>
        </footer>
      </div>
    </section>
  );
}
