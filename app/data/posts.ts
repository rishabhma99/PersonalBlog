export type PostPreview = {
  title: string;
  description: string;
  date: string;
};

export const posts: PostPreview[] = [
  {
    title: "Writing 1",
    description:
      "A quick tour of the tech stack and goals for this site as it evolves.",
    date: "2024-05-01",
  },
  {
    title: "Writing 2",
    description:
      "Notes from prototypes, side projects, and weekend rabbit holes.",
    date: "2024-04-12",
  },
];
