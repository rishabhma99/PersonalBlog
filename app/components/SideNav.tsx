"use client";

import { useCallback, type MouseEvent } from "react";

type NavLink = {
  label: string;
  href: string;
  targetId?: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/#top", targetId: "top" },
  { label: "Career", href: "/#career", targetId: "career" },
  { label: "Projects", href: "/#projects", targetId: "projects" },
  { label: "Writing", href: "/#posts", targetId: "posts" },
];

const CONTACT_LINK: NavLink = {
  label: "Contact",
  href: "mailto:rishabh@example.com",
};

const easing = (t: number) => t * t * t;

const scrollWithAcceleration = (target: HTMLElement, duration = 700) => {
  const start = window.scrollY;
  const targetRect = target.getBoundingClientRect();
  const offset = 0;
  const end = targetRect.top + window.scrollY - offset;
  const distance = end - start;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easing(progress);

    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const SideNav = () => {
  const handleNavClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, link: NavLink) => {
      if (!link.targetId || typeof window === "undefined") {
        return;
      }

      const isHomePage = window.location.pathname === "/";
      if (!isHomePage) {
        return;
      }

      const targetElement = document.getElementById(link.targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      scrollWithAcceleration(targetElement);
      window.history.replaceState(null, "", link.href);
    },
    []
  );

  return (
    <nav className="site-nav" aria-label="Primary">
      <a href="/" className="brand">
        Rishabh Mathur
      </a>
      <div className="nav-links">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleNavClick(event, link)}
          >
            {link.label}
          </a>
        ))}
        <a href={CONTACT_LINK.href}>{CONTACT_LINK.label}</a>
      </div>
    </nav>
  );
};

export default SideNav;
