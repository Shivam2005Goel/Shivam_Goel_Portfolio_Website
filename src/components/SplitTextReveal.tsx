"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  /** Gradient-colored accent words (e.g. the second word) */
  accentWords?: number[];
  /** Delay before animation starts */
  delay?: number;
  /** Enable gradient sweep animation on the text */
  gradientSweep?: boolean;
}

export default function SplitTextReveal({
  text,
  className = "",
  accentWords = [],
  delay = 0,
  gradientSweep = false,
}: SplitTextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = text.split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", columnGap: "0.3em", rowGap: "0.1em" }}>
      {words.map((word, wordIndex) => {
        const isAccent = accentWords.includes(wordIndex);
        return (
          <span key={wordIndex} style={{ overflow: "hidden", display: "inline-flex", paddingBottom: "0.1em" }}>
            <motion.span
              initial={{
                opacity: 0,
                y: "120%",
                filter: "blur(8px)",
                rotateZ: 4,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: "0%",
                      filter: "blur(0px)",
                      rotateZ: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: delay + wordIndex * 0.15,
                ease: [0.16, 1, 0.3, 1], // ultra smooth cubic bezier
              }}
              style={{
                display: "inline-block",
                transformOrigin: "left center",
                ...(isAccent
                  ? {
                      background:
                        "linear-gradient(135deg, var(--accent), var(--accent-light))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }
                  : {}),
                ...(gradientSweep && !isAccent
                  ? {
                      background:
                        "linear-gradient(90deg, #fff 0%, rgba(148,163,184,0.7) 50%, #fff 100%)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: isInView
                        ? `gradientSweep 3s ease ${delay + wordIndex * 0.1 + 0.5}s infinite`
                        : "none",
                    }
                  : {}),
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}

      {gradientSweep && (
        <style jsx global>{`
          @keyframes gradientSweep {
            0%,
            100% {
              background-position: 0% center;
            }
            50% {
              background-position: 200% center;
            }
          }
        `}</style>
      )}
    </span>
  );
}
