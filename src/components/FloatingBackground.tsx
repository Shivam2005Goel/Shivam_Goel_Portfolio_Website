"use client";

import { motion } from "framer-motion";
import { FaReact, FaPython, FaAws, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript, SiMongodb, SiRedis } from "react-icons/si";

const floatingIconsMap = [
  { Icon: FaReact, top: "10%", left: "8%", size: 55, delay: 0, color: "#61DAFB" },
  { Icon: SiNextdotjs, top: "20%", left: "85%", size: 70, delay: 0.5, color: "#fff" },
  { Icon: FaPython, top: "55%", left: "3%", size: 45, delay: 1, color: "#FFD43B" },
  { Icon: SiPostgresql, top: "65%", left: "88%", size: 60, delay: 1.5, color: "#336791" },
  { Icon: SiTypescript, top: "80%", left: "12%", size: 40, delay: 2, color: "#3178C6" },
  { Icon: FaDocker, top: "35%", left: "92%", size: 50, delay: 2.5, color: "#2496ED" },
  { Icon: FaAws, top: "30%", left: "5%", size: 55, delay: 3, color: "#FF9900" },
  { Icon: FaNodeJs, top: "75%", left: "75%", size: 48, delay: 1.2, color: "#339933" },
  { Icon: SiMongodb, top: "45%", left: "15%", size: 42, delay: 2.2, color: "#47A248" },
  { Icon: SiRedis, top: "15%", left: "60%", size: 38, delay: 0.8, color: "#DC382D" },
];

export default function FloatingBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {floatingIconsMap.map((item, idx) => (
        <motion.div
          key={idx}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            color: item.color,
          }}
          initial={{ y: 0, rotateZ: 0, opacity: 0 }}
          animate={{
            y: [0, -50, 0],
            rotateZ: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotateZ: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            opacity: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: item.delay },
          }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </div>
  );
}
