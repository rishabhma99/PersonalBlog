/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anselm's Ontological Argument",
  description:
    "An analysis of Anselm's Ontological Argument for the existence of God",
};

export const slug = "ontology";
export const summary = {
  title: String(metadata.title ?? "Anselm's Ontological Argument"),
  description: String(
    metadata.description ??
      "An analysis of Anselm's Ontological Argument for the existence of God"
  ),
  date: "2025-10-16",
};

export default function OntologyArticle() {
  return (
    <main className="article-container">
      <article className="article">
        <header className="article-header">
          <p className="article-eyebrow">{summary.title}</p>
          <h1>A Refutation of Anslem&apos;s Ontological Argument</h1>
          <p className="article-meta">{summary.date} · 2 min read</p>
        </header>

        <section className="article-section">
          <h2>Introduction</h2>
          <p>
            I was recently presented with ‘Anselm's Ontological Argument’ for the existence of God, and was told to find the most apparent flaws present within. An Ontological Argument varies from other arguments where it deduces the existence of God from a simple definition of God and argues that God's existence must be logically entailed from that initial definition.
          </p>

          <p>
            Personally, I have no experience with philosophy so it was an interesting exercise to carry through, and I am also very out of practice with writing, so I thought it would be good to finally unrot my brain.
          </p>

          <h2>The Argument</h2>
          <p>
            Using <a href="https://www.princeton.edu/~grosen/pucourse/phi203/ontological.html" target="_blank" rel="noopener">https://www.princeton.edu/~grosen/pucourse/phi203/ontological.html</a> as source material – which includes the initial unadulterated words as well an interpretation of these words – the argument goes something like:
          </p>

          <blockquote>
            <ol type="A">
              <li>By "God" we mean "a being than which no greater being can be conceived"</li>
              <li>We understand what it means to speak of a being than which no greater can be conceived. We understand what these words mean.</li>
              <li>We can conceive of such a being's existing in reality.</li>
              <b>Anselm now assumes a principle that he clearly regards as trivial.</b>
              <li>If we understand what it means to speak of X, then X exists in the understanding.</li> 

              <b>From (a), (b) and (d) we may now infer:</b>  
              <li>God exists in the understanding.</li>
              <li>Suppose that God exists in the understanding but not in reality.</li>
              <b>From (f) and (c) we may now infer:</b> 
              <li>God in fact exists in the understanding alone, but he may be conceived to exist in reality as well as in the understanding.</li>
              <li>If something exists in the understanding alone, but can be conceived to exist in reality, then that thing can be conceived to be greater than it actually is. God can be conceived to be greater than it actually is.</li>
              <li>But this is absurd. For given our definition (a), this just means tha A being that cannot be conceived to be greater than it is can be conceived to be greater than it is.</li>
              <li>From which it follows that our supposition (f) is false. We may therefore conclude God exists in reality.</li>
            </ol>              
          </blockquote>

          <h2>My thoughts</h2>
          <p>On the initial reading, there were a few semantic issues with the argument, which probably didn’t invalidate it, but I still found it noteworthy.</p>

          <p>Firstly, the initial jump from A -{'>'} B -{'>'} C did not seem as trivial as Anselm made it sound. It is not necessarily obvious - at least to me – that ‘a being than which no greater being can be conceived’ can ‘be conceived to exist in reality’. I personally feel that the concept is understandable: any attribute that is associated with this ‘being’ can be thought of as being a) present and b) the ‘greatest’ that can be imagined. However, we cannot easily imagine that embodied in reality – any such attempts could easily be refuted with a counterexample, as I’ll explain later.</p>

          <p>Generally, we see an issue with this argument with the concept of the infinite. We can consider something that has the property of being greater than any other that can be conceived as analogous to a limit to infinity in mathematics. My understanding stretches only to basic introductory analysis, but in the standard case, <code>infinity + 1 {'>'} infinity</code> is not a statement we can confidently assert. In my opinion, this observation undermines a lot of the future argument, as we see that much of the argument relies on D, and D only holds true with the concept of God rather than being God itself. It's easier to argue about the concept of God and its existence in our understanding, rather than its actual existence in reality.</p>

          <p>This leads to my biggest issue with the argument part H; I believe there are a few different ways that the assumption ‘If something exists in the understanding alone, but can be conceived to exist in reality, then that thing can be conceived to be greater than it actually is.’ can be attacked, but I think the most logically compelling would be to assume if this premise is true, it would lead to a contradiction.</p>

          <p>I think that asserting that a being conceived to exist in reality makes the actual entity greater is logically inconsistent. Let's take ‘greater than’ to mean that a being with more attributes is greater than the one that does not. Suppose we take H as true, then something that has the property of not being conceived to exist in reality is also an additional property. However, by H God does not have this property, but it must have it in order to be consistent with A. This is a contradiction, as A and H cannot be mutually true.</p>

          <p>The core issue this argument runs into is treating an entity with the properties of the infinite identically to one that is finite in nature. The arguments that Anslem uses hold true for finite entities but not for infinite ones. A lot of the assumption he presumes trivially true in the argument can be inverted and still be true – however, these two statements will contradict with each other and obviously cannot coexist.</p>

        </section>
      </article>
    </main>
  );
}
