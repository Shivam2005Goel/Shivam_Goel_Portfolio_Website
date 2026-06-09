"use client";

import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Code2, Database, Brain, Globe, Layers, Zap } from "lucide-react";
import SplitTextReveal from "./SplitTextReveal";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with React, Next.js, Node.js, and modern architectures.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Designing robust data models and optimizing queries for PostgreSQL, MongoDB, and Redis.",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Integrating LLMs, computer vision, and predictive models into production systems.",
  },
  {
    icon: Globe,
    title: "Cloud & DevOps",
    description: "Deploying on AWS, Docker, and Vercel with CI/CD pipelines and infrastructure as code.",
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Architecting microservices, APIs, and distributed systems for high availability.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Profiling and tuning applications for sub-100ms response times and minimal resource usage.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="section container" id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">
          <SplitTextReveal text="What I Do" accentWords={[2]} gradientSweep />
        </h2>
        <p className="text-lead text-center mx-auto" style={{ marginBottom: "3rem" }}>
          I specialize in building end-to-end digital products, from concept to deployment.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <SpotlightCard className="h-full p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/20 flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{service.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
