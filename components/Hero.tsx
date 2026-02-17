"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { DxtLogo } from "./DxtLogo";

// Fill reveal: text first (0), left moons (0.3), right moons (0.5) — total ~0.8s

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = logoRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePos({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      });
    },
    [prefersReducedMotion],
  );

  const handleMouseLeave = useCallback(() => setMousePos(null), []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 grid-pattern"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-deep-base via-background to-blue-violet/40"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--lavender)_0%,_transparent_55%)] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--electric)_0%,_transparent_55%)] opacity-90" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--cyber-pink)_0%,_transparent_70%)] opacity-20"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          className="relative flex min-h-[35vh] w-full max-w-4xl cursor-default items-center justify-center overflow-hidden md:min-h-[45vh] lg:min-h-[50vh]"
          whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* biome-ignore lint/a11y/noStaticElementInteractions: Mouse handlers for decorative spotlight only */}
          <div
            ref={logoRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
          >
            <DxtLogo
              className="h-full min-h-[35vh] w-auto max-w-full md:min-h-[45vh] lg:min-h-[50vh]"
              TextGroup={motion.g}
              LeftMoonGroup={motion.g}
              RightMoonGroup={motion.g}
              textGroupProps={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: prefersReducedMotion
                  ? { duration: 0.2 }
                  : { delay: 0, duration: 0.4, ease: "easeOut" },
              }}
              leftMoonGroupProps={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: prefersReducedMotion
                  ? { duration: 0.2 }
                  : { delay: 0.3, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
              rightMoonGroupProps={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: prefersReducedMotion
                  ? { duration: 0.2 }
                  : { delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
              showGlare={!prefersReducedMotion}
              glareDelay={1}
              mousePos={mousePos}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-4 font-[family-name:var(--font-share-tech-mono)] text-lg text-accent md:text-xl"
        >
          Front-end Developer & IT Student
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-2 font-[family-name:var(--font-exo2)] text-base text-foreground/70"
        >
          Henrique Souza
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="https://drive.google.com/uc?export=download&id=1ImsnE6scPwB8WWwwjUqOIm6OcJ5NJaJ7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-accent bg-accent/20 px-6 py-3 font-[family-name:var(--font-orbitron)] text-sm font-medium text-accent transition-all hover:bg-accent hover:text-background"
          >
            Download CV
          </Link>
          <Link
            href="https://wa.me/5551998942097"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border-2 border-cyber-pink bg-cyber-pink/20 px-6 py-3 font-[family-name:var(--font-orbitron)] text-sm font-medium text-cyber-pink transition-all hover:bg-cyber-pink hover:text-background"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
