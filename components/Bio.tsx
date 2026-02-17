"use client";

import { motion } from "motion/react";

export function Bio() {
  return (
    <section
      id="bio"
      className="relative border-y border-metallic/20 bg-gradient-to-b from-background to-deep-base/50 py-24 px-6 halftone-dots"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold tracking-tight text-accent drop-shadow-[0_0_20px_rgba(158,122,255,0.3)] transition-[filter] duration-300 hover:drop-shadow-[0_0_30px_rgba(158,122,255,0.5)] md:text-4xl">
          About me
        </h2>
        <p className="mt-6 font-[family-name:var(--font-exo2)] leading-relaxed text-foreground/90">
          Welcome! My name is Henrique Souza. I&apos;m a Front-end developer and
          IT Student at IFRS. I&apos;ve been studying HTML, CSS and JavaScript
          since 2021 and building my own projects since 2022. I&apos;m always
          looking for new opportunities to collaborate and grow. You can find
          all my social links below.
        </p>
      </motion.div>
    </section>
  );
}
