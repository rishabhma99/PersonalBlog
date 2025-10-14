const posts = [
  {
    title: "Building My Personal Space",
    description:
      "A quick tour of the tech stack and goals for this site as it evolves.",
    date: "2024-05-01",
  },
  {
    title: "Recent Experiments",
    description:
      "Notes from prototypes, side projects, and weekend rabbit holes.",
    date: "2024-04-12",
  },
  {
    title: "Reading List",
    description:
      "Articles, books, and papers that resonated with me this month.",
    date: "2024-03-26",
  },
];

export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <span aria-hidden="true" className="dot" />
        <h1>Hi, I&apos;m Rishabh.</h1>
        <p>
          I build thoughtful software and write about the process. This is the
          home for my notes on engineering, learning, and the things that keep
          me curious.
        </p>
        <div className="cta-group">
          <a className="button primary" href="#posts">
            Read the blog
          </a>
          <a className="button secondary" href="mailto:rishabh@example.com">
            Say hello
          </a>
        </div>
      </header>

      <section id="posts" className="posts">
        <h2>Latest writing</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.title}>
              <article>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </time>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button type="button" className="inline-link">
                  Coming soon
                </button>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
