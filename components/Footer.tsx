"use client";

import Link from "next/link";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/henriquesouza" },
  { label: "LinkedIn", href: "https://linkedin.com/in/henriquesouza" },
];

export function Footer() {
  return (
    <footer className="border-t border-metallic/20 bg-deep-base/30 py-12 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-[family-name:var(--font-exo2)] text-sm text-foreground/70">
          © 2026 Henrique Souza · dxt.tsx
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#hero"
            className="font-[family-name:var(--font-share-tech-mono)] text-sm text-metallic transition-colors hover:text-accent"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
