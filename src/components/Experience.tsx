"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Experience.module.css";
import SplitTextReveal from "./SplitTextReveal";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="section container" id="experience" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-2 text-center">
          <SplitTextReveal text="Work Experience" accentWords={[1]} gradientSweep />
        </h2>

        <div className={styles.experienceGrid}>
          {/* Left Column - Code Editor */}
          <motion.div
            className={styles.codeColumn}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={styles.codeWindow}>
              {/* Window header */}
              <div className={styles.codeHeader}>
                <div className={styles.codeHeaderLine}>
                  <div className={styles.codeLineGradient1} />
                  <div className={styles.codeLineGradient2} />
                </div>
                <div className={styles.codeHeaderDots}>
                  <div className={styles.dotRed} />
                  <div className={styles.dotOrange} />
                  <div className={styles.dotGreen} />
                  <span className={styles.codeFilename}>developer.js</span>
                </div>
              </div>

              {/* Code content */}
              <div className={styles.codeContent}>
                <pre className={styles.codePre}>
                  <div>
                    <span className={styles.cKeyword}>const</span>{" "}
                    <span className={styles.cVariable}>developer</span>{" "}
                    <span className={styles.cKeyword}>=</span>{" "}
                    <span className={styles.cPunc}>{"{"}</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cProp}>name</span>
                    <span className={styles.cPunc}>:</span>{" "}
                    <span className={styles.cString}>&apos;Shivam Goel&apos;</span>
                    <span className={styles.cPunc}>,</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cProp}>title</span>
                    <span className={styles.cPunc}>:</span>{" "}
                    <span className={styles.cString}>&apos;Full-Stack Developer&apos;</span>
                    <span className={styles.cPunc}>,</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cProp}>skills</span>
                    <span className={styles.cPunc}>: [</span>
                  </div>
                  <div className={styles.indent2}>
                    <span className={styles.cString}>&apos;React&apos;</span>
                    <span className={styles.cPunc}>, </span>
                    <span className={styles.cString}>&apos;Next.js&apos;</span>
                    <span className={styles.cPunc}>, </span>
                    <span className={styles.cString}>&apos;Python&apos;</span>
                  </div>
                  <div className={styles.indent2}>
                    <span className={styles.cString}>&apos;Node.js&apos;</span>
                    <span className={styles.cPunc}>, </span>
                    <span className={styles.cString}>&apos;PostgreSQL&apos;</span>
                    <span className={styles.cPunc}>, </span>
                    <span className={styles.cString}>&apos;AWS&apos;</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cPunc}>],</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cProp}>experience</span>
                    <span className={styles.cPunc}>:</span>{" "}
                    <span className={styles.cNumber}>1</span>
                    <span className={styles.cNumber}> +</span>
                    <span className={styles.cString}> &apos;years&apos;</span>
                    <span className={styles.cPunc}>,</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cProp}>traits</span>
                    <span className={styles.cPunc}>: [</span>
                    <span className={styles.cString}>&apos;hardWorker&apos;</span>
                    <span className={styles.cPunc}>, </span>
                    <span className={styles.cString}>&apos;quickLearner&apos;</span>
                    <span className={styles.cPunc}>],</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cPropGreen}>hireable</span>
                    <span className={styles.cPunc}>:</span>{" "}
                    <span className={styles.cKeyword}>function</span>
                    <span className={styles.cPunc}>() {"{"}</span>
                  </div>
                  <div className={styles.indent2}>
                    <span className={styles.cKeyword}>return</span>{" "}
                    <span className={styles.cBool}>true</span>
                    <span className={styles.cPunc}>;</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cPunc}>{"}"},</span>
                  </div>
                  <div className={styles.indent1}>
                    <span className={styles.cProp}>currentStatus</span>
                    <span className={styles.cPunc}>:</span>{" "}
                    <span className={styles.cString}>&apos;Building awesome things 🚀&apos;</span>
                    <span className={styles.cPunc}>,</span>
                  </div>
                  <div>
                    <span className={styles.cPunc}>{"}"}</span>
                    <span className={styles.cPunc}>;</span>
                  </div>
                </pre>

                {/* Blinking cursor */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className={styles.blinkingCursor}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <div className={styles.timelineColumn}>
            <div className={styles.timeline} ref={lineRef}>
              <motion.div
                className={styles.timelineLine}
                initial={{ scaleY: 0 }}
                animate={lineInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              <motion.div
                className={styles.timelineItem}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className={styles.timelineDot}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
                />
                <div className={`${styles.timelineContent} glass-card`}>
                  <span className={styles.date}>May 2026 – Present</span>
                  <h3 className={styles.role}>Developer Intern</h3>
                  <div className={styles.company}>Argmac Private Limited | Onsite, Delhi</div>
                  <ul className={styles.descriptionList}>
                    <li>Developed and launched Argmac&apos;s e-commerce storefront on Shopify, handling theme customization, product listings, and end-to-end store configuration.</li>
                    <li>Drove SEO growth through targeted blog content, keyword optimization, and metadata structuring to improve organic search visibility and traffic.</li>
                    <li>Built a full ERP system to manage inventory, orders, and internal business operations, streamlining day-to-day workflows.</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
