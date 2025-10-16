import Link from "next/link";
import { posts } from "../data/posts";

export default function ArchivePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Writing archive</h1>
        <p>
          Every piece I publish lives here, from deep dives and tutorials to
          quick notes on what I&apos;m experimenting with. Browse by date or use
          it as a jumping-off point for your own explorations.
        </p>
      </header>

      <section className="posts" aria-labelledby="archive-heading">
        <h2 id="archive-heading">All posts</h2>
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.title}>
              <article className="post-card">
                <div className="post-heading">
                  <h3>
                    <Link className="post-title-link" href={post.url}>
                      {post.title}
                    </Link>
                  </h3>
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
      </section>
    </main>
  );
}
