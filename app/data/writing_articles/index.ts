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

// Webpack adds require.context at build time in Next.js.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const requireArticle = (require as any).context("./", false, /\.tsx$/);

const entries = requireArticle.keys().map((path: string) => {
  const articleModule = requireArticle(path) as ArticleModule;
  const slug = articleModule.slug ?? path.replace("./", "").replace(/\.tsx$/, "");

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
