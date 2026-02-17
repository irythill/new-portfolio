"use client";

import { motion } from "motion/react";

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export function TechStack() {
  return (
    <section
      id="tech"
      className="relative border-y border-metallic/20 bg-background py-24 px-6 grid-pattern"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold tracking-tight text-accent drop-shadow-[0_0_20px_rgba(158,122,255,0.3)] transition-[filter] duration-300 hover:drop-shadow-[0_0_30px_rgba(158,122,255,0.5)] md:text-4xl">
          Tech Stack
        </h2>
        <ul className="mt-8 flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <motion.li
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="rounded-md border border-metallic/40 bg-deep-base/50 px-5 py-2 font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(158,122,255,0.25)]"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
