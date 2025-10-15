export type Project = {
  name: string;
  summary: string;
  tech: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Signal Canvas",
    summary:
      "A visualizer that turns live telemetry into interactive, artistic patterns across devices.",
    tech: ["Next.js", "WebGL", "TypeScript"],
    url: "https://example.com/signal-canvas",
  },
  {
    name: "Field Notes",
    summary:
      "Lightweight note-taking app designed for engineers to capture experiments and findings quickly.",
    tech: ["Remix", "SQLite", "Tailwind"],
    url: "https://example.com/signal-canvas",
  },
  {
    name: "Edge Atlas",
    summary:
      "Infrastructure dashboards that surface anomalies in distributed systems without the noise.",
    tech: ["React", "D3.js", "Rust"],
    url: "https://example.com/edge-atlas",
  },
];
