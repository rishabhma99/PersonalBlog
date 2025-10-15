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
      <body>
        <div className="page-shell">
          <nav className="site-nav" aria-label="Primary">
            <a href="#top" className="brand">
              Rishabh Mathur
            </a>
            <div className="nav-links">
              <a href="#top">Home</a>
              <a href="#posts">Writing</a>
              <a href="mailto:rishabh@example.com">Contact</a>
            </div>
          </nav>
          <div className="page-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
