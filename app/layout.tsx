import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "Thoughts, projects, and notes from Rishabh Mathur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
