"use client";

import { useEffect, useState, useRef } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

interface TextScrambleProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

export default function TextScramble({ text, className = "", trigger = true }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);
  const frameCounter = useRef(0);

  useEffect(() => {
    if (!trigger) return;

    const length = Math.max(text.length, display.length);
    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = display[i] || "";
      const to = text[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queueRef.current.push({ from, to, start, end });
    }

    frameCounter.current = 0;
    cancelAnimationFrame(frameRef.current);

    const update = () => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];
        let char = queueRef.current[i].char;

        if (frameCounter.current >= end) {
          complete++;
          output += to;
        } else if (frameCounter.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queueRef.current[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }

      setDisplay(output);

      if (complete === queueRef.current.length) {
        return;
      }

      frameCounter.current++;
      frameRef.current = requestAnimationFrame(update);
    };

    update();

    return () => cancelAnimationFrame(frameRef.current);
  }, [text, trigger]);

  return <span className={className}>{display}</span>;
}
