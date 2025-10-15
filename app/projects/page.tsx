import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Projects</h1>
        <p>
          A closer look at the experiments, products, and tools I&apos;ve been
          building. Each one reflects the problems I love to solve: clear
          interfaces, resilient systems, and a little bit of delight.
        </p>
      </header>

      <section className="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          Project list
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-heading">
                <h3>{project.name}</h3>
                {project.url ? (
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ↗
                  </a>
                ) : null}
              </div>
              <p>{project.summary}</p>
              <ul className="tech-list">
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
