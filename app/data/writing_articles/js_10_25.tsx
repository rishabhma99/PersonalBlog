import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test 2 Articles",
  description:
    "An example article that walks through the foundations of this personal site and how to evolve it.",
};

export const slug = "js-2025-10";
export const summary = {
  title: metadata.title ?? "Building a Personal Blog With Next.js",
  description:
    metadata.description ??
    "An example article that walks through the foundations of this personal site and how to evolve it.",
  date: "2025-10-17",
};

export default function TestArticle() {
  return (
    <main className="article-container">
      <article className="article">
        <header className="article-header">
          <p className="article-eyebrow">Example Article</p>
          <h1>Building a Personal Blog With Next.js</h1>
          <p className="article-meta">October 17, 2025 · 6 min read</p>
        </header>

        <section className="article-section">
          <h2>Why start with a simple scaffold?</h2>
          <p>
            Great blogs begin with a strong foundation. By leaning on the Next.js
            App Router, we can iterate quickly while keeping performance sharp.
            Server Components handle data loading, React&apos;s familiar model keeps
            authoring comfortable, and static export means GitHub Pages handles
            hosting without extra services.
          </p>
          <p>
            This sample article gives you a starting point to experiment with tone,
            structure, and formatting. Swap in your own experiences, entire
            walkthroughs, or quick notes—whatever reflects your voice.
          </p>
        </section>

        <section className="article-section">
          <h2>Structure of this project</h2>
          <p>
            The site is kept intentionally minimal. Each major section—from career
            highlights to recent projects—lives in its own slice of the homepage.
            Articles like this one live under <code>app/articles/&lt;slug&gt;</code>.
            Because everything is colocated, you can evolve components and content
            together.
          </p>
          <ul>
            <li>
              <strong>app/page.tsx</strong> renders the homepage and shows the latest
              three projects and posts.
            </li>
            <li>
              <strong>app/data</strong> stores structured content such as post and
              project lists.
            </li>
            <li>
              <strong>app/articles</strong> contains full-length writing. Adding a new
              file instantly creates a route.
            </li>
          </ul>
        </section>

        <section className="article-section">
          <h2>Next steps for your own voice</h2>
          <p>
            Replace this example with your first real post. Consider writing an intro
            explaining what readers can expect, or document the journey of building
            the site itself. Once you have a few articles, wire the homepage cards to
            these routes and experiment with MDX or a CMS if you want richer content.
          </p>
          <p>
            Most importantly, keep shipping. A personal site is never finished—it
            evolves as you do.
          </p>
        </section>
      </article>
    </main>
  );
}
