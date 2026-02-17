"use client";

import { motion } from "motion/react";
import Link from "next/link";

const socialLinks = [
  { label: "Email", href: "mailto:henrique@example.com", accent: "accent" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/henriquesouza",
    accent: "accent",
  },
  {
    label: "GitHub",
    href: "https://github.com/henriquesouza",
    accent: "accent",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5551998942097",
    accent: "cyber-pink",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/henriquesouza",
    accent: "accent",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-y border-metallic/20 bg-background py-24 px-6 grid-pattern"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold tracking-tight text-accent drop-shadow-[0_0_20px_rgba(158,122,255,0.3)] transition-[filter] duration-300 hover:drop-shadow-[0_0_30px_rgba(158,122,255,0.5)] md:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-6 font-[family-name:var(--font-exo2)] leading-relaxed text-foreground/90">
          Interested in working together or just saying hi? Reach out through
          any of the links below.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-md border-2 px-6 py-3 font-[family-name:var(--font-orbitron)] text-sm font-medium transition-all duration-300 ${
                link.accent === "cyber-pink"
                  ? "border-cyber-pink bg-cyber-pink/20 text-cyber-pink hover:bg-cyber-pink hover:text-background hover:shadow-[0_0_20px_rgba(224,107,136,0.4)]"
                  : "border-accent bg-accent/20 text-accent hover:bg-accent hover:text-background hover:shadow-[0_0_20px_rgba(158,122,255,0.4)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
