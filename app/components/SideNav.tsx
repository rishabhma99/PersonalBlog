"use client";

import { useCallback, type MouseEvent } from "react";

type SectionLink = {
  label: string;
  targetId: string;
  fallbackPath?: string;
};

const sectionLinks: SectionLink[] = [
  { label: "Home", targetId: "top", fallbackPath: "/" },
  { label: "Career", targetId: "career" },
  { label: "Projects", targetId: "projects", fallbackPath: "/projects/" },
  { label: "Writing", targetId: "posts", fallbackPath: "/articles/" },
];

const contactLink = {
  label: "Contact",
  href: "mailto:rishabh@example.com",
};

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const normalisedBasePath =
  rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

const withBasePath = (path: string) => {
  if (!normalisedBasePath) {
    return path;
  }

  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:")) {
    return path;
  }

  if (path === "/") {
    return `${normalisedBasePath}/`;
  }

  if (path.startsWith("/#")) {
    return `${normalisedBasePath}${path}`;
  }

  if (path.startsWith("#")) {
    return `${normalisedBasePath}/#${path.slice(1)}`;
  }

  if (path.startsWith("/")) {
    return `${normalisedBasePath}${path}`;
  }

  return `${normalisedBasePath}/${path}`;
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
  const getAnchorHref = useCallback(
    (targetId: string) => withBasePath(`/#${targetId}`),
    []
  );

  const getResolvedHref = useCallback(
    (link: SectionLink) =>
      withBasePath(link.fallbackPath ?? `/#${link.targetId}`),
    []
  );

  const isHomePath = useCallback(() => {
    const currentPath =
      window.location.pathname.replace(/\/+$/, "") || "/";

    if (!normalisedBasePath) {
      return currentPath === "/";
    }

    const normalisedCurrent =
      currentPath === "" ? "/" : currentPath;

    return (
      normalisedCurrent === normalisedBasePath ||
      normalisedCurrent === `${normalisedBasePath}`
    );
  }, [normalisedBasePath]);

  const handleNavClick = useCallback(
    (
      event: MouseEvent<HTMLAnchorElement>,
      link: SectionLink,
      anchorHref: string
    ) => {
      if (typeof window === "undefined") {
        return;
      }

      if (!isHomePath()) {
        return;
      }

      const targetElement = document.getElementById(link.targetId);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      scrollWithAcceleration(targetElement);
      window.history.replaceState(null, "", anchorHref);
    },
    [isHomePath]
  );

  const homeHref = withBasePath("/");

  return (
    <nav className="site-nav" aria-label="Primary">
      <a href={homeHref} className="brand">
        Rishabh Mathur
      </a>
      <div className="nav-links">
        {sectionLinks.map((link) => {
          const anchorHref = getAnchorHref(link.targetId);
          const resolvedHref = getResolvedHref(link);

          return (
            <a
              key={link.targetId}
              href={resolvedHref}
              onClick={(event) =>
                handleNavClick(event, link, anchorHref)
              }
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNav;
