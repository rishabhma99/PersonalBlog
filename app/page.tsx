import { experience } from "./data/experience";
import { posts } from "./data/posts";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <main className="container" id="top">
      <header className="hero">
        <h1>Hi, I&apos;m Rishabh.</h1>
        <p>
          I build thoughtful software and write about the process. This is the
          home for my notes on engineering, learning, and the things that keep
          me curious.
        </p>
      </header>

      <section className="page-section career" id="career">
        <div className="career-inner">
          <header>
            <h2>Career snapshot</h2>
            <p>
              Over the last decade I&apos;ve shipped products across startups
              and large teams. From crafting pixel-perfect interfaces to scaling
              platform infrastructure, I enjoy finding elegant solutions to
              messy problems.
            </p>
          </header>

          <ul className="timeline">
            {experience.map((entry) => (
              <li key={`${entry.role}-${entry.company}`} className="timeline-item">
                <strong>
                  {entry.company}, {entry.role}
                </strong>
                <span>{entry.dates}</span>
                <p>{entry.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section projects" id="projects">
        <div className="projects-header">
          <h2>Recent projects</h2>
          <a className="see-more" href="projects">
            See more →
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-heading">
                <h3>{project.name}</h3>
                {project.url ? (
                  <a className="project-link" href={project.url}>
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

      <section id="posts" className="page-section posts">
        <h2>Latest writing</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="post-card">
                <div className="post-heading">
                  <h3>{post.title}</h3>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(undefined, {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p>{post.description}</p>
              </article>
            </li>
          ))}
        </ul>
        <div className="posts-footer">
          <a className="see-more" href="archive">
            See more →
          </a>
        </div>
      </section>
    </main>
  );
}
