export type PostPreview = {
  title: string;
  description: string;
  date: string;
};

export const posts: PostPreview[] = [
  {
    title: "Building My Personal Space",
    description:
      "A quick tour of the tech stack and goals for this site as it evolves.",
    date: "2024-05-01",
  },
  {
    title: "Recent Experiments",
    description:
      "Notes from prototypes, side projects, and weekend rabbit holes.",
    date: "2024-04-12",
  },
  {
    title: "Reading List",
    description:
      "Articles, books, and papers that resonated with me this month.",
    date: "2024-03-26",
  },
];
