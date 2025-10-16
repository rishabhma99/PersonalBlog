import { articleSummaries } from "./writing_articles";

export type PostPreview = {
  title: string;
  description: string;
  date: string;
  url: string;
};

export const posts: PostPreview[] = articleSummaries;
