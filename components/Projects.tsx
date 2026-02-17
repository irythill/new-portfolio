"use client";

import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    title: "Deathko's Landing Page",
    description:
      "A landing page project showcasing modern design and responsive layout.",
    url: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Blog",
    description:
      "Personal blog with articles about web development and learning.",
    url: "#",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Portfolio",
    description: "Previous portfolio version with single-page layout.",
    url: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-y border-metallic/20 bg-gradient-to-b from-deep-base/50 to-background py-24 px-6 halftone-dots"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <h2 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold tracking-tight text-accent drop-shadow-[0_0_20px_rgba(158,122,255,0.3)] transition-[filter] duration-300 hover:drop-shadow-[0_0_30px_rgba(158,122,255,0.5)] md:text-4xl">
          Projects
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-metallic/40 bg-deep-base/50 p-5 transition-all duration-300 hover:border-accent hover:shadow-[0_0_25px_rgba(158,122,255,0.25)]"
              >
                <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-semibold text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-exo2)] text-sm leading-relaxed text-foreground/80">
                  {project.description}
                </p>
                {project.tags?.length ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-metallic/30 px-2 py-1 font-[family-name:var(--font-share-tech-mono)] text-xs text-metallic"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
