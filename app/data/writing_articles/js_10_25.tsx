import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jane Street Puzzle - Robot Baseball",
  description:
    "An example article that walks through the foundations of this personal site and how to evolve it.",
};

export const slug = "js1025";
export const summary = {
  title: metadata.title,
  description:
  metadata.description,
  date: "2025-10-16",
};


export default function JaneStreet1025() {
  return (
    <main className="article-container">
      <article className="article">
        <header className="article-header">
          <p className="article-eyebrow">{summary.title}</p>
          <h1>Jane Street Puzzle - Robot Baseball</h1>
          <p className="article-meta">{summary.date} · 6 min read</p>
        </header>

        <section className="article-section">
          <h2>Why start with a simple scaffold?</h2>
         <p>Text</p>
        </section>
      </article>
    </main>
  );
}
