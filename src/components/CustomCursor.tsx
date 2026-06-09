"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
      setIsVisible(true);
    };

    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-screen"
        animate={{
          x: position.x - (isPointer ? 24 : 8),
          y: position.y - (isPointer ? 24 : 8),
          width: isPointer ? 48 : 16,
          height: isPointer ? 48 : 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(251,113,133,0.15) 100%)",
          filter: "blur(2px)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/20"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}
