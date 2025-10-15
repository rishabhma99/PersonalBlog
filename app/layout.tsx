import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";

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
          <SideNav />
          <div className="page-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
