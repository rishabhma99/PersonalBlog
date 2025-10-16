import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  articles,
  articleSlugs,
} from "../../data/writing_articles";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const entry = articles[params.slug];
  if (!entry) {
    return {
      title: "Article not found",
      description: "The article you were looking for does not exist.",
    };
  }

  return entry.metadata;
}

export default function ArticlePage({ params }: PageProps) {
  const entry = articles[params.slug];

  if (!entry) {
    notFound();
  }

  const ArticleComponent = entry.Component;
  return <ArticleComponent />;
}
