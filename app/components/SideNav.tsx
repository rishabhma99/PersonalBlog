"use client";

import { useCallback, type MouseEvent } from "react";

type SectionLink = {
  label: string;
  targetId: string;
};

const sectionLinks: SectionLink[] = [
  { label: "Home", targetId: "top" },
  { label: "Career", targetId: "career" },
  { label: "Projects", targetId: "projects" },
  { label: "Writing", targetId: "posts" },
];

const contactLink = {
  label: "Contact",
  href: "mailto:rishabh@example.com",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
  const getHrefForSection = useCallback((targetId: string) => {
    const hashPath = `/#${targetId}`;
    if (!basePath) {
      return hashPath;
    }

    const normalisedBase = basePath.endsWith("/")
      ? basePath.slice(0, -1)
      : basePath;

    return `${normalisedBase}${hashPath}`;
  }, []);

  const isHomePath = useCallback(() => {
    const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
    if (!basePath) {
      return currentPath === "/";
    }

    const normalisedBase =
      basePath.replace(/\/+$/, "") === "" ? "/" : basePath.replace(/\/+$/, "");
    return currentPath === normalisedBase;
  }, []);

  const handleNavClick = useCallback(
    (
      event: MouseEvent<HTMLAnchorElement>,
      targetId: string,
      resolvedHref: string
    ) => {
      if (typeof window === "undefined") {
        return;
      }

      if (!isHomePath()) {
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      scrollWithAcceleration(targetElement);
      window.history.replaceState(null, "", resolvedHref);
    },
    [isHomePath]
  );

  const homeHref = basePath ? `${basePath.replace(/\/+$/, "") || ""}/` : "/";

  return (
    <nav className="site-nav" aria-label="Primary">
      <a href={homeHref} className="brand">
        Rishabh Mathur
      </a>
      <div className="nav-links">
        {sectionLinks.map((link) => {
          const resolvedHref = getHrefForSection(link.targetId);

          return (
            <a
              key={link.targetId}
              href={resolvedHref}
              onClick={(event) =>
                handleNavClick(event, link.targetId, resolvedHref)
              }
            >
              {link.label}
            </a>
          );
        })}
        <a href={contactLink.href}>{contactLink.label}</a>
      </div>
    </nav>
  );
};

export default SideNav;
