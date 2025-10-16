export type PostPreview = {
  title: string;
  description: string;
  date: string;
  url?: string;
};

export const posts: PostPreview[] = [
  {
    title: "Building a Personal Blog With Next.js",
    description:
      "The guiding principles behind this site and how to take it further.",
    date: "2024-06-12",
    url: "/articles/ontology/",
  },
  {
    title: "Mapping a Career Timeline",
    description:
      "Reflections on leading teams, mentoring designers, and staying hands-on.",
    date: "2024-05-22",
  },
  {
    title: "Curating Side Projects With Purpose",
    description:
      "How small experiments compound into product intuition and craft.",
    date: "2024-04-18",
  },
  {
    title: "Tending the Weekly Notebook",
    description:
      "A lightweight ritual for capturing lessons before they fade.",
    date: "2024-03-14",
  },
];
