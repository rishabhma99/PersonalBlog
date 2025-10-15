import { posts } from "./data/posts";

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

      <section className="career">
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
            <li className="timeline-item">
              <strong>Lead Software Engineer · Stellar Systems</strong>
              <span>2022 — Present</span>
              <p>
                Shaping web experiences for millions while mentoring designers
                and engineers.
              </p>
            </li>
            <li className="timeline-item">
              <strong>Senior Frontend Engineer · Horizon Labs</strong>
              <span>2018 — 2022</span>
              <p>
                Drove the design system initiative and built reusable app
                primitives.
              </p>
            </li>
            <li className="timeline-item">
              <strong>Founding Engineer · Aurora Startups</strong>
              <span>2014 — 2018</span>
              <p>
                Wore every hat: product discovery, prototyping, and full-stack
                delivery.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section id="posts" className="posts">
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
          <a className="see-more" href="/archive">
            See more →
          </a>
        </div>
      </section>
    </main>
  );
}
