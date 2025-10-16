import { createRequire } from "module";
import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

type ArticleModule = {
  default: () => JSX.Element;
  metadata: Metadata;
  slug: string;
  summary: {
    title: string;
    description: string;
    date: string;
  };
};

const articlesDir = path.join(process.cwd(), "app/data/writing_articles");
const requireArticle = createRequire(import.meta.url);

const articleFiles = fs
  .readdirSync(articlesDir)
  .filter((file) => file.endsWith(".tsx") && file !== "index.tsx");

const entries = articleFiles.map((file) => {
  const modulePath = path.join(articlesDir, file);
  const articleModule = requireArticle(modulePath) as ArticleModule;
  const slug =
    articleModule.slug ?? file.replace(/\.tsx$/, "");

  return [
    slug,
    {
      Component: articleModule.default,
      metadata: articleModule.metadata,
      summary: articleModule.summary,
    },
  ] as const;
});

export const articles = Object.fromEntries(entries) satisfies Record<
  string,
  {
    Component: () => JSX.Element;
    metadata: Metadata;
    summary: {
      title: string;
      description: string;
      date: string;
    };
  }
>;

export const articleSlugs = Object.keys(articles);

export const articleSummaries = articleSlugs
  .map((slug) => ({
    ...articles[slug].summary,
    url: `/articles/${slug}/`,
  }))
  .sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
