import type { Metadata } from "next";
import OntologyArticle, {
  metadata as ontologyMetadata,
} from "./ontology";

type ArticleModule = {
  Component: () => JSX.Element;
  metadata: Metadata;
};

export const articles: Record<string, ArticleModule> = {
  ontology: {
    Component: OntologyArticle,
    metadata: ontologyMetadata,
  },
};

export const articleSlugs = Object.keys(articles);
