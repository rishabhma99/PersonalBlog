import type { Metadata } from "next";
import OntologyArticle, {
  metadata as ontologyMetadata,
  slug as ontologySlug,
  summary as ontologySummary,
} from "./ontology";

type ArticleModule = {
  Component: () => JSX.Element;
  metadata: Metadata;
  summary: {
    title: string;
    description: string;
    date: string;
  };
};

export const articles: Record<string, ArticleModule> = {
  [ontologySlug]: {
    Component: OntologyArticle,
    metadata: ontologyMetadata,
    summary: ontologySummary,
  },
};

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
