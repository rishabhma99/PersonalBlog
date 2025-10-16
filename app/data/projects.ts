export type Project = {
  name: string;
  summary: string;
  tech: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Placeholder 1",
    summary:
      "A visualizer that turns live telemetry into interactive, artistic patterns across devices.",
    tech: ["Next.js", "WebGL", "TypeScript"],
    url: "https://example.com/signal-canvas",
  },
  {
    name: "Placeholder 2",
    summary:
      "Lightweight note-taking app designed for engineers to capture experiments and findings quickly.",
    tech: ["Remix", "SQLite", "Tailwind"],
  },
];
